# styledProperty
[![npm version](https://badge.fury.io/js/styled-property.svg)](https://badge.fury.io/js/styled-property) [![Build Status](https://travis-ci.org/codepunkt/styled-property.svg?branch=master)](https://travis-ci.org/codepunkt/styled-property) [![Coverage Status](https://coveralls.io/repos/github/codepunkt/styled-property/badge.svg?branch=master)](https://coveralls.io/github/codepunkt/styled-property?branch=master)

[`styled-components`](https://github.com/styled-components/styled-components) helper that generates a set of styles and sets the auto-generated className for them as property on a wrapped component.

## Installation
```bash
npm install styled-property
```
## Usage
```javascript
import styledProperty from 'styled-property'

// auto-generates a class selector for the given css and sets it
// as "propName" property on the WrappedComponent.
const Component = styledProperty(WrappedComponent, 'propName')`
  display: block;
`
```
## Use Cases

### react-router `Link`

Set default and active styles of `Link` component from [`react-router`](https://github.com/ReactTraining/react-router).

```javascript
import { Link } from 'react-router'
import styled from 'styled-components'
import styledProperty from 'styled-property'

// create basic Link styles
const BaseLink = styled(Link)`
  color: #aaa;
  display: inline-block;
  text-decoration: none;
`

// create an additional set of style rules and set the "activeClassName"
// property of the wrapped component (BaseLink) to the auto-generated
// className for those styles.
const StyledLink = styledProperty(BaseLink, 'activeClassName')`
  color: #bada55;
`
```

### react-sticky `Sticky`

Set default and sticky styles of `Sticky` component from [`react-sticky`](https://github.com/captivationsoftware/react-sticky).

```javascript
import { Sticky } from 'react-sticky'
import styled from 'styled-components'
import styledProperty from 'styled-property'

// create basic Sticky styles
const BaseSticky = styled(Sticky)`
  margin-top: 0;
  transition: margin-top .3s ease-in-out;
`

// create an additional set of style rules and set the "stickyClassName"
// property of the wrapped component (BaseSticky) to the auto-generated
// className for those styles.
const StyledSticky = styledProperty(BaseSticky, 'stickyClassName')`
  margin-top: 16px;
`
```
