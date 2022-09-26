import './index.scss'
import { Icon } from '@iconify/react'
import ImageSlider from './ImageSlider'
import img1 from '../../assets/images/bike.jpg'
import img2 from '../../assets/images/skydive.JPG'
import img3 from '../../assets/images/pwpf.JPG'
import img4 from '../../assets/images/golf.jpg'
import img5 from '../../assets/images/strawberry.JPEG'

const About = () => {
    const slides = [
        {url: img1, title: 'Bike'},
        {url: img2, title: 'Skydive'},
        {url: img3, title: 'Pwpf'},
        {url: img4, title: 'Golf'},
        {url: img5, title: 'Strawberry '}
    ];

    return (
        <div style={{overflowY:'scroll'}} className='container about-page'>
            <h1>About Me</h1>
            <div data-name='about' className='text-zone'>
                <h2>Background</h2>
                <p>
                    I am a third year undergraduate student at the Georgia Institute of Technology's College of Computing 
                    with concentrations in Intelligence and People. <br />
                    <br />
                    As an innately curious individual who loves to create for impact, software engineering is the perfect field for me.
                    There's never a dull moment: the countless positive impressions left on the world and endless "Aha!" moments
                    is what keeps me glued to this field. Some areas of interest of mine are back-end development, cloud architecture, and machine learning, but
                    I'm always excited to dive into new aspects of computer science!<br />
                    <br />
                    As for myself, I've gotten a diverse taste of software engineering:<br />
                    I've designed dynamic websites, written scripts to scrape websites for automatic transactions, 
                    developed a fully-interactive video game, and led a team to develop an SMS weather chat bot that won two awards.<br />
                    <br />
                    I'm always looking for opportunities to grow as a software engineer and expand my skills. So please feel free to reach out
                    via email and check me out on my socials!
                </p>
                <div className='skills'>
                    <h2>Skills</h2>
                    <ul className='skillbar'>
                        <li>
                            <div className='icon'>
                                <Icon icon='logos:python' style={{ fontSize: '25px' }} />
                            </div>
                            <div className='progress percent90'>
                                <span>
                                    90%
                                </span>
                            </div>
                        </li>
                        <li>
                            <div className='icon'>
                                <Icon icon='logos:java' style={{ fontSize: '25px' }}/>
                            </div>
                            <div className='progress percent90'>
                                <span>
                                    90%
                                </span>
                            </div>
                        </li>
                        <li>
                            <div className='icon'>
                                <Icon icon='logos:git' style={{ fontSize: '25px' }}/>
                            </div>
                            <div className='progress percent80'>
                                <span>
                                    80%
                                </span>
                            </div>
                        </li>
                        <li>
                            <div className='icon'>
                                <Icon icon='logos:javascript' style={{ fontSize: '25px' }}/>
                            </div>
                            <div className='progress percent75'>
                                <span>
                                    75%
                                </span>
                            </div>
                        </li>
                        <li>
                            <div className='icon'>
                                <Icon icon='logos:c' style={{ fontSize: '25px' }}/>
                            </div>
                            <div className='progress percent75'>
                                <span>
                                    75%
                                </span>
                            </div>
                        </li>
                        
                        <li>
                            <div className='icon'>
                                <Icon icon='logos:react' style={{ fontSize: '25px' }}/>
                            </div>
                            <div className='progress percent65'>
                                <span>
                                    65%
                                </span>
                            </div>
                        </li>
                        <li>
                            <div className='icon'>
                                <Icon icon='logos:aws' style={{ fontSize: '25px' }}/>
                            </div>
                            <div className='progress percent65'>
                                <span>
                                    65%
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='personal-container'>
                <div className='personal-pictures'>
                    <ImageSlider slides={slides} />
                </div>
                <div className='personal-interests'>
                    <h2>Passions</h2>
                    <ul className='passions'>
                        <li>
                            <h3><Icon icon='fluent-emoji-flat:desktop-computer' style={{ fontSize: '20px' }} /> Programming</h3>
                            <ul className='passioninfo'>
                                <li>
                                    <b>Favorite Langauge:</b> Python
                                </li>
                                <li>
                                    <b>Skills to Learn:</b> SQL, PHP, Go
                                </li>
                            </ul>
                        </li>
                        <li>
                            <h3><Icon icon='emojione-v1:music-ascend' style={{ fontSize: '20px' }} /> Music</h3>
                            <ul className='passioninfo'>
                                <li>
                                    <b>Instruments:</b> Guitar, Drums, Piano
                                </li>
                                <li>
                                    <b>Favorite Songs:</b> Love on the Weekend (John Mayer), 2 Soon (Keshi)
                                </li>
                            </ul>
                        </li>
                        <li>
                            <h3><Icon icon='fluent-emoji-flat:basketball' style={{ fontSize: '20px' }} /> Basketball</h3>
                            <ul className='passioninfo'>
                                <li>
                                    <b>Favorite Team:</b> Los Angeles Lakers
                                </li>
                                <li>
                                    <b>Favorite Player:</b> Stephen Curry
                                </li>
                            </ul>
                        </li>
                        <li>
                            <h3><Icon icon='emojione:airplane' style={{ fontSize: '20px' }} /> Traveling </h3>
                            <ul className='passioninfo'>
                                <li>
                                    <b>Favorite Country Visited:</b> Japan
                                </li>
                                <li>
                                    <b>Countries to Visit:</b> Switzerland, Iceland, Singapore
                                </li>
                            </ul>
                        </li>
                        <li>
                            <h3><Icon icon='noto:video-game' style={{ fontSize: '20px' }} /> Video Games</h3>
                            <ul className='passioninfo'>
                                <li>
                                    <b>Favorite Games:</b> The Legend of Zelda: Breath of the Wild, Minecraft
                                </li>
                            </ul>
                        </li>
                        <li>
                            <h3><Icon icon='fluent-emoji-flat:ringed-planet' style={{ fontSize: '20px' }} /> Astronomy</h3>
                            <ul className='passioninfo'>
                                <li>
                                    <b>Recent Interests:</b> Quasars, James Webb Space Telescope
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About