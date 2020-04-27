import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from '../../redux/user/user.selectors'
import { selectCurrentProfile } from '../../redux/profile/profile.selectors'
import LoadingComponent from '../loading/loading.component'
import ProfileForm from '../profile-form/profle-form.component'
import ModalComponent from '../modal/modal.component'
import store from '../../redux/store';
import { loadProfile } from '../../redux/profile/profile.actions'
import setAuthToken from '../../utils/setAuthToken';
import CustomButton from '../custom-button/custom-button.component'
import { Image, Modal } from 'semantic-ui-react'

const OrderList = ({ user, profile }) => {
    const [modal, setModal] = useState(false)
    useEffect(() => {
        if (localStorage.token) {
            setAuthToken(localStorage.token);
            store.dispatch(loadProfile());
            console.log('fdfdd', store.dispatch(loadProfile()))
        }
    }, []);

    const showModal =
        <ModalComponent
            open={modal}
            onClose={() => setModal(false)}
            content={<ProfileForm onClose={() => setModal(false)} />}
            title="Compléter mon profil"
        />

    const { city, adress, postCode, phone, status, civility, imageUrl } = profile || {}



    return (
        <section className="profile-detail" >

            {!user || !profile ? <LoadingComponent /> :
                !user.email ? <p>veuillez completer votre profile</p>
                    :
                    <div>
                        <article className="section-profile">
                            <section className="detail-profile-1">
                                <span>Civilité: {civility}</span>
                                <span>Nom: {user.displayName} &nbsp;  <button onClick={() => alert("modifé")}>Modifier</button></span>
                                <span>Email: {user.email}  <button onClick={() => alert("modifé")}>Modifier</button></span>
                                <span>Ville: {city} </span>
                                <span>Adresse postale: {adress} </span>
                                <span>Code postal: {postCode} </span>
                                <span>Téléphone: {phone} </span>
                                <span>Status / Profession: {status} </span>
                            </section>
                            <section className="detail-profile-2">
                                <Modal.Content image>
                                    <Image wrapped size='medium' src={!imageUrl ? 'https://react.semantic-ui.com/images/avatar/large/rachel.png' : imageUrl} />
                                </Modal.Content>
                            </section>
                        </article>

                        {showModal}
                        <footer className="detail-profile-footer">
                            <CustomButton onClick={() => setModal(true)}>{city ? "Mettre à jour votre profile" : "Completer votre profile"}</CustomButton>
                        </footer>
                    </div>

            }

        </section >
    )
}
OrderList.propTypes = {
    user: PropTypes.array.isRequired
}

const mapStateToProps = createStructuredSelector({
    user: selectCurrentUser,
    profile: selectCurrentProfile
})
export default connect(mapStateToProps)(OrderList)