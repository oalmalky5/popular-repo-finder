import React from 'react'


class Popular extends React.Component{
    render() {

        const langs = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'] 
        return (
            // this is more or less how you loop over a list in react  
            <ul className='flex-center'>
                {langs.map((item, index) => (
                    <li key={index}> 
                        <button className='btn-clear nav-link'>
                            {item}
                        </button>
                    </li>
                ))}
            </ul>
        )
    }
}

export default Popular; 