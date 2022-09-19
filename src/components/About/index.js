import './index.scss'

const About = () => {
    return (
        <div className='container about-page'>
            <h1>About Me</h1>
            <div data-name='about' className='text-zone'>
                <h2>Background</h2>
                <p>This is my background yada yada</p>
                <h2>Interests</h2>
                <p>I'm interested in your mum</p>
                <div className='skills'>
                    <h2>Skills</h2>
                    <ul>
                        <li>Skill1</li>
                        <li>Skill2</li>
                        <li>Skill3</li>
                    </ul>
                </div>
            </div>
            <div className='personal-container'>
                <div className='personal-pictures'>

                </div>
                <div className='personal-interests'>
                    <h2>Interests</h2>
                </div>
            </div>
        </div>
    )
}

export default About