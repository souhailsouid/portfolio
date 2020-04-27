import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import './service-item.styles.scss'

const ServiceItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
    <section className={`${size} service-item`} onClick={() => history.push(`${match.url}/${linkUrl}`)}>
        {imageUrl ? <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }} />
            : <img src="https://img.icons8.com/ios/150/000000/like.png" alt="votre liste d'envies" />}
        <article className={!imageUrl ? 'content' : 'content-img'}>
            <div className='title'>{title.toUpperCase()}</div>
        </article>
    </section>
)


ServiceItem.propTypes = {
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    linkUrl: PropTypes.string.isRequired,
    match: PropTypes.object.isRequired,
    size: PropTypes.string,
    history: PropTypes.object
}

export default withRouter(ServiceItem)
