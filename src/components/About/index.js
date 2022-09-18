import './index.scss'

const About = () => {
    return (
        <div className='container about-page'>
            <h1>About Me</h1>
            <div className='about-container'>
                <div className='text-zone background'>
                    <h2>Background</h2>
                </div>
                <div className='text-zone interests'>
                    <h2>Interests</h2>
                </div>
                <div className='text-zone skills'>
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