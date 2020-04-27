import { toast } from 'react-toastify'
import { css } from 'glamor';

export const customToastifyBlack = {
    type: toast.TYPE.SUCCESS,
    position: toast.POSITION.TOP_RIGHT,
    className: css({
        backgroundColor: '#000000 !important',
        marginTop: '4.375rem'
    })
}
export const customToastifyYellow = {
    className: css({
        marginTop: '4.375rem'
    })
}
export const customToastifyRed = {
    className: css({
        backgroundColor: 'rgb(178, 30, 62) !important',
        marginTop: '4.375rem',


    })
}

export const customToastifyGreen = {
    className: css({
        backgroundColor: '#2e856e !important',
        marginTop: '4.375rem'
    })
}
