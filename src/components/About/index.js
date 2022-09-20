import './index.scss'
import { Icon } from '@iconify/react'

const About = () => {
    return (
        <div style={{overflowY:'scroll'}} className='container about-page'>
            <h1>About Me</h1>
            <div data-name='about' className='text-zone'>
                <h2>Background</h2>
                <p>
                    I am a third year undergraduate student at the Georgia Institute of Technology's College of Computing. (Go Jackets!)
                    I'm studying computer science with a concentration in Intelligence and People. <br />
                    <br />
                    As somebody who loves to create for impact while challenging myself, software engineering is the perfect field for me.
                    There's never a dull moment in this field: the countless positive impressions left on the world and endless "Aha!" moments
                    is what keeps me glued to software engineering. <br />
                    <br />
                    As for myself, I've gotten a diverse taste of software engineering:<br />
                    I've designed dynamic websites, written scripts to scrape websites for automatic transactions, 
                    developed a fully-interactive video game, and led a team to develop an SMS weather chat bot that won two awards.<br />
                </p>
                <div className='skills'>
                    <h2>Skills</h2>
                    <ul className='skillbar'>
                        <li>
                            <div className='icon'>
                                <Icon icon='logos:python' style={{ fontSize: '25px' }} />
                            </div>
                            <div className='progress percent70'>
                                <span>
                                    70%
                                </span>
                            </div>
                        </li>
                        <li>
                            <div className='icon'>
                                <Icon icon='logos:java' style={{ fontSize: '25px' }}/>
                            </div>
                            <div className='progress percent70'>
                                <span>
                                    70%
                                </span>
                            </div>
                        </li>
                        <li>
                            <div className='icon'>
                                <Icon icon='logos:git' style={{ fontSize: '25px' }}/>
                            </div>
                            <div className='progress percent60'>
                                <span>
                                    60%
                                </span>
                            </div>
                        </li>
                        <li>
                            <div className='icon'>
                                <Icon icon='logos:c' style={{ fontSize: '25px' }}/>
                            </div>
                            <div className='progress percent50'>
                                <span>
                                    50%
                                </span>
                            </div>
                        </li>
                        <li>
                            <div className='icon'>
                                <Icon icon='logos:javascript' style={{ fontSize: '25px' }}/>
                            </div>
                            <div className='progress percent40'>
                                <span>
                                    40%
                                </span>
                            </div>
                        </li>
                        <li>
                            <div className='icon'>
                                <Icon icon='logos:react' style={{ fontSize: '25px' }}/>
                            </div>
                            <div className='progress percent40'>
                                <span>
                                    40%
                                </span>
                            </div>
                        </li>
                        <li>
                            <div className='icon'>
                                <Icon icon='logos:aws' style={{ fontSize: '25px' }}/>
                            </div>
                            <div className='progress percent40'>
                                <span>
                                    40%
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='personal-container'>
                <div className='personal-pictures'>

                </div>
                <div className='personal-interests'>
                    <h2>Passions</h2>
                    <p>
                        hello
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About