import React from 'react'
import PropType from 'prop-types'
import {fetchPopularRepos} from '../utils/api'




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
            selectedLang: 'All',
            repos: null,
            error: null
        }

        // its good habit to bind methods whenever creating one like this
        // to avoid the common undefined setStatet problem
        this.updatedLang = this.updatedLang.bind(this)
        this.isLoading = this.isLoading.bind(this)
    }

    componentDidMount () {
        this.updatedLang(this.state.selected)
    }
    

    updatedLang(selectedLang) {
        this.setState({
            selectedLang
             
        })
        fetchPopularRepos(selectedLang)
            .then((repos) => this.setState({
                repos,
                error: null
            }))
            .catch(() => {
                console.warn('Error Fetching Repos: '  )
                this.setState({
                    error: 'There was an error fetching the repositories.'
                })
            })
     } 

     isLoading() {
        return this.state.repos === null && this.state.error === null
     }

    render() {
        const {selectedLang, repos, error} = this.state

        return (
            <React.Fragment>
                <LanguagesNav 
                    selected={selectedLang}
                    onUpdateLanguage={this.updatedLang}
                />

                {this.isLoading() && <p>LOADING</p>}
                {error && <p>{error}</p>}
                {repos && <pre>{JSON.stringify(repos, null, 2)}</pre>}
            </React.Fragment>
        )
    }
}

export default Popular; 