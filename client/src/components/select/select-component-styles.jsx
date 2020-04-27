export const customStyles = {

    dropdownIndicator: () => ({
        color: 'black',
        marginTop: 'auto'
    }),
    indicatorSeparator: () => ({
        display: 'none'
    }),
    placeholder: () => ({
        color: '#333333',
        fontWeight: 'bold',
        fontSize: '13px',

    }),
    option: (provided, state) => ({
        ...provided,
        color: state.isSelected ? '#333333' : '',
        backgroundColor: state.isSelected ? '#DDDDDD' : ""
    }),
    control: () => ({
        // none of react-select's styles are passed to <Control />
        border: '1px solid #dfdfdf',
        textDecoration: 'none',
        color: '#333333',
        fontSize: '12px',
        fontWeight: 'bold',
        padding: '0 15px',
        lineHeight: '32px',
        width: '17vw',
        height: 'auto',
        textAlign: 'center',
        webkitBorderRadius: '16px',
        mozBorderRadius: '16px',
        borderRadius: '16px',
        display: 'flex'
    }),
}
export const customErrorStyles = {

    dropdownIndicator: () => ({
        color: '#cc4949',
        marginTop: 'auto'
    }),
    indicatorSeparator: () => ({
        display: 'none'
    }),
    placeholder: () => ({
        color: '#cc4949',
        fontWeight: 'bold',
        fontSize: '13px',

    }),
    option: (provided, state) => ({
        ...provided,
        color: state.isSelected ? '#333333' : '',
        backgroundColor: state.isSelected ? '#DDDDDD' : ""
    }),
    control: () => ({
        // none of react-select's styles are passed to <Control />
        border: '1px solid #cc4949',
        textDecoration: 'none',
        color: '#333333',
        fontSize: '12px',
        fontWeight: 'bold',
        padding: '0 15px',
        lineHeight: '32px',
        width: '17vw',
        height: 'auto',
        textAlign: 'center',
        webkitBorderRadius: '16px',
        mozBorderRadius: '16px',
        borderRadius: '16px',
        display: 'flex'

    }),
}