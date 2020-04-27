import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
// Components
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { Message } from 'semantic-ui-react'
import { profileWillUpdate } from '../../redux/profile/profile.actions'
import './profile-form.styles.scss'
import { Image, Modal } from 'semantic-ui-react'
const ProfileForm = ({ profileWillUpdate, profile, onClose }) => {

    const [formData, setFormData] = useState({
        city: profile.city || '',
        postCode: profile.postCode || '',
        adress: profile.adress || '',
        phone: profile.phone || '',
        civility: profile.civility || '',
        status: profile.status || '',
        imageUrl: profile.imageUrl || ''
    })
    const [notification, setNotification] = useState([])

    const { city, postCode, adress, phone, civility, status, imageUrl } = formData

    const handleChange = event => {
        const { name, value } = event.target

        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = async e => {
        e.preventDefault()
        profileWillUpdate({ city, postCode, adress, phone, civility, status, imageUrl })
        setNotification(['Votre profil à été mis à jour !'])
    }


    return (
        <div className="sign-up modal">
            {notification.length ?
                <Message
                    success
                    className="message-notification"
                > <p className="notification">{notification}</p></Message> : null}
            <form className="sign-up-form" onSubmit={(e) => handleSubmit(e)} >
                <div className="modal-style">
                    <section className="modal-section1">
                        <FormInput
                            type="text"
                            name="city"
                            value={city}
                            handleChange={(e) => handleChange(e)}
                            label="Ville  *"
                            required
                        />

                        <FormInput
                            type="number"
                            name="postCode"
                            value={postCode}
                            handleChange={(e) => handleChange(e)}
                            label="Code postal  *"
                            required
                        />
                        <FormInput
                            type="text"
                            name="adress"
                            value={adress}
                            handleChange={(e) => handleChange(e)}
                            label="Adresse postale  *"
                            required
                        />
                        <FormInput
                            type="number"
                            name="phone"
                            value={phone}
                            handleChange={(e) => handleChange(e)}
                            label="Numéro de téléphone  *"
                            required
                        />
                        <FormInput
                            type="text"
                            name="civility"
                            value={civility}
                            handleChange={(e) => handleChange(e)}
                            label="Civilité  *"
                            required
                        />
                        <FormInput
                            type="text"
                            name="status"
                            value={status}
                            handleChange={(e) => handleChange(e)}
                            label="Votre profession *"
                            required
                        />

                    </section>
                    <section className="modal-section2">
                        <span className="label-picture">Votre photo de profile</span>
                        <Modal.Content image className="modal-picture">
                            <Image wrapped size='medium' src={!imageUrl ? 'https://react.semantic-ui.com/images/avatar/large/rachel.png' : imageUrl} />
                        </Modal.Content>
                        <FormInput
                            type="text"
                            name="imageUrl"
                            value={imageUrl}
                            handleChange={(e) => handleChange(e)}
                            label="Votre photo de profile"

                        />
                    </section>

                </div>
                <footer style={{ display: 'flex', width: '45vw', justifyContent: 'flex-end' }}>
                    <CustomButton isGithubSignIn onClick={onClose}>Revenir</CustomButton>
                    <CustomButton type="submit" >Mettre à jour</CustomButton>
                </footer>

            </form >

        </div >
    )

}

ProfileForm.propTypes = {
    profileWillUpdate: PropTypes.func.isRequired,

}

const mapStateToProps = state => ({
    profile: state.profile.profile,
})


export default connect(mapStateToProps, { profileWillUpdate })(ProfileForm)


