import React from 'react'
import { Dimmer, Loader, Image } from 'semantic-ui-react'
import './loading.styles.scss'

const LoadingComponent = () => (
    <section className="loading">
        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
        <Dimmer active inverted>
            <Loader size='large'>Chargement en cours</Loader>
        </Dimmer>
    </section>
)

export default LoadingComponent