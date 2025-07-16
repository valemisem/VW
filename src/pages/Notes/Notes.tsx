import { useEffect, useRef, type ChangeEvent, type FC } from "react";
import styled from "styled-components";
import { ROUTES_NOTES_ID } from "./noteId/routes";
import { useInfiniteQuery } from "@tanstack/react-query";
import { notesQueryPaged } from "../../api/querys/notes";
import { NoteCard } from "../../components/NoteCard/NoteCard";
import { useDeleteNote } from "../../components/modals/DeleteNote/DeleteNote.hooks";
import { useNavigate, useSearchParams } from "react-router";
import { NOTE_CARD_WIDTH } from "../../ds/NoteCard/NoteCard";
import { SearchInput } from "../../ds/SearchInput/SearchInput";
import { useDebouncedCallback } from "use-debounce";
import { useInView } from "react-intersection-observer";
import { InfiniteScroll } from "../../ds/InfiniteScroll/InfiniteScroll";
import { StyledLoading } from "../../ds/Loading/Loading";

const QUERY_PARAM = "query";
const PAGE_SIZE = 10;

const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Cards = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(
    auto-fit,
    minmax(${NOTE_CARD_WIDTH}px, max-content)
  );
  justify-content: space-evenly;
  align-items: center;
  overflow: auto;
  padding-bottom: 30px;
`;

const StyledInfiniteScrollIndicator = styled(InfiniteScroll)`
  grid-column-start: 1;
  grid-column-end: -1;
`;

export const Notes: FC = () => {
  const searchInputRef = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const { addDeleteNote } = useDeleteNote();
  const navigate = useNavigate();
  const { ref, inView } = useInView({});
  const {
    data: notes,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery(notesQueryPaged(PAGE_SIZE));

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage]);

  const onSeachChange = useDebouncedCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const query = event.target.value;

      const params = new URLSearchParams(searchParams);
      if (query) {
        params.set(QUERY_PARAM, query);
      } else {
        params.delete(QUERY_PARAM);
      }
      setSearchParams(params);
    },
    300
  );

  const filteredNotes = notes?.pages
    .flatMap((page) => page)
    .filter((note) =>
      note.title
        .toLowerCase()
        .includes((searchParams.get(QUERY_PARAM) ?? "").toLowerCase())
    );

  return (
    <Container>
      <SearchInput
        aria-label="search"
        onChange={onSeachChange}
        ref={searchInputRef}
        defaultValue={searchParams.get(QUERY_PARAM)?.toString()}
      />
      <Cards>
        {filteredNotes &&
          filteredNotes.map((note) => (
            <NoteCard
              to={`${note.id}/${ROUTES_NOTES_ID.view}`}
              key={note.id}
              onEditClick={() => {
                navigate(`${note.id}/${ROUTES_NOTES_ID.edit}`);
              }}
              onDeleteClick={() => {
                addDeleteNote(note.id);
              }}
              {...note}
            />
          ))}
        {isFetchingNextPage && <StyledLoading />}
        {hasNextPage && !isFetchingNextPage && (
          <StyledInfiniteScrollIndicator ref={ref} label="" />
        )}
      </Cards>
    </Container>
  );
};
