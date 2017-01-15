# styledProperty
[![npm version](https://badge.fury.io/js/styled-property.svg)](https://badge.fury.io/js/styled-property) [![Build Status](https://travis-ci.org/codepunkt/styled-property.svg?branch=master)](https://travis-ci.org/codepunkt/styled-property) [![Coverage Status](https://coveralls.io/repos/github/codepunkt/styled-property/badge.svg?branch=master)](https://coveralls.io/github/codepunkt/styled-property?branch=master)

A helper that takes a Component and a property name and returns a function that takes a [`TaggedTemplateLiteral`](https://github.com/styled-components/styled-components/blob/master/docs/api.md#taggedtemplateliteral) and turns it into a [`StyledComponent`](https://github.com/styled-components/styled-components/blob/master/docs/api.md#styledcomponent). 
```javascript
import { Link } from 'react-router'
import styledProp from 'styled-property'

const BaseLink = styled(Link)`
  color: #aaa;
  display: inline-block;
  margin: 0.5em 0;
  text-decoration: none;
`

const StyledLink = styledProperty(BaseLink, 'activeClassName')`
  color: #bada55;
`
```
