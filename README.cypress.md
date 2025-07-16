# VW Digital Hub - Test Automation Suite

[![E2E (Cypress)](https://github.com/valemisem/VW/actions/workflows/cypress.yml/badge.svg)](https://github.com/valemisem/VW/actions/workflows/cypress.yml)

## Overview

E2E test automation for the VW Digital Hub Notes application using Cypress with TypeScript

## Tech Stack
- **Cypress 13.x** + TypeScript
- **Page Object Model** pattern
- **GitHub Actions** CI/CD
- **Data-driven testing** with fixtures

## Quick Start
```bash
# Prerequisites: Node.js 20+, npm
npm install

# Start application (backend + frontend)
npm run start:both

# Run tests
npx cypress run                    # Headless execution
npm run cypress:open               # Interactive mode
```

## Test Coverage

### Functional Testing
| Test Suite | Coverage | Status |
|------------|----------|--------|
| **CRUD Operations** | Create, Read, Update, Delete notes | ✅ |
| **Search Functionality** | Note search by title | ✅ |
| **Data Validation** | Edge case with special characters | ✅ |

### Non-Functional Testing
- **Performance**: API response time < 1000ms
- **Accessibility**: Keyboard navigation
- **Cross-browser**: Chrome, Firefox, Edge

### Test Scenarios
```typescript
// Standard workflow
- Create note with valid data
- Search and update existing note  
- Delete note and verify removal

// Edge case
- Special characters: üñiçødé, symbols

// Performance & accessibility
- API response time monitoring
- Tab order validation
- Keyboard-only navigation
```

## Quality Gates

### Pre-deployment criteria
- [x] All tests must pass for deployment approval (100%)
- [x] API performance < 1000ms response time
- [x] Zero accessibility violations
- [x] Cross-browser compatibility verified

## Project Structure

```
cypress/
├── support/
│   ├── pageObjects/
│   │   └── NotesVWPage.ts           # Main page object class
│   ├── selectors/
│   │   └── notes_vw_selectors.json  # Centralized element selectors
│   ├── utils/
│   │   └── randomName.ts            # Test data generation utilities
│   └── fixtures/
│       └── notes.json               # Test data fixtures
tests/
└── e2e/
    └── notes.cy.ts                  # Test specifications
cypress.config.cjs                   # Cypress configuration
.github/workflows/
└── cypress.yml                      # CI/CD pipeline
```

## CI/CD Pipeline

**Triggers**: Pull requests, pushes to main branch  
**Workflow**: Install dependencies → Start services → Health check → Test execution → Report generation  
**Config**: `.github/workflows/cypress.yml`

### Pipeline Steps
1. **Setup**: Node.js 20, dependency installation
2. **Services**: Start backend (port 3004) + frontend (port 3003)
3. **Health Check**: `wait-on http://localhost:3003`
4. **Execution**: Cypress test suite
5. **Reporting**: Test results

### Best Practices Implemented
- Use `data-cy` attributes for element selection
- Follow POM pattern for maintainability
- Ensure test isolation and independence

---

**QA Engineer**: Valentina Mikhailova  
**Last Updated**: 17 July 2025  
**Version**: 1.0.0