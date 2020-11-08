import React from 'react'
import PropType from 'prop-types'




const LanguagesNav = ({selected, onUpdateLanguage}) => {
    const langs = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'] 
    return (
        // this is more or less how you loop over a list in react  
        <ul className='flex-center'>
            {langs.map((language) => (
                <li key={language}> 
                    <button 
                        style={language === selected? {color: 'brown'} : null } // inline style in jsx
                        onClick={() => onUpdateLanguage(language)} 
                        className='btn-clear nav-link'
                    >
                        {language}
                     </button>
                </li>
            ))}
        </ul>
    )

}

LanguagesNav.prototype = {
    selected: PropType.string.isRequired,
    onUpdateLanguage: PropType.func.isRequired
}
class Popular extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            selectedLang: 'All'
        }

        // its good habit to bind methods whenever creating one like this
        // to avoid the common undefined setStatet problem
        this.updatedLang = this.updatedLang.bind(this)
    }

    updatedLang(selectedLang) {
        this.setState({
            selectedLang
             
        })
        // console.log('lang selcted')
    } 


    render() {
        const {selectedLang} = this.state

        return (
            <React.Fragment>
                <LanguagesNav 
                    selected={selectedLang}
                    onUpdateLanguage={this.updatedLang}
                />
            </React.Fragment>
        )
    }
}

export default Popular; 