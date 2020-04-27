import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import CollectionItem from '../collection-item/collection-item.component'

import './collection-preview.styles.scss'

const CollectionPreview = ({ title, items, match, history, routeName }) => (
  <article className="collection-preview" onClick={() => history.push(`${match.url}/${routeName}`)}>
    <header>
      <h1 className="title-collection" >{title.toUpperCase()}</h1>
    </header>
    <section className="preview">
      {items.filter((item, idx) => idx < 4)
        .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </section>
  </article>
)

CollectionPreview.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired
}

export default withRouter((CollectionPreview))
