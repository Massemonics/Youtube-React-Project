import './About.css'
const About = () => {
    return (
        <div className="about">
             <p id = 'project-desc'>A YouTube mock-up that uses the YouTube API, to renders videos and allows the user post comments</p>
            <div className="about-card">
                <p>- A Short Bio of <strong>Daniel Naranjo</strong></p>
                <div>
                    <ul>
                        <li>I'm originally from Ecuador, moved to USA in 2015</li>
                        <li>I've joined Pursuit to be part of the 3.0 web revolution of disruptive 
                            technologies like Artifical Intelligence and the block chain.</li>
                        <li>A fun fact about me is that I like Philosophy, Bodybuilding, Economics and Trading</li>
                    </ul>
                    <p>
                        <a href="https://github.com/PompaDonpa"><img src="https://api.iconify.design/eva:github-fill.svg" alt="octocat" /></a>
                        Visit Daniel's<a href="https://github.com/PompaDonpa">GitHub</a>
                    </p>
                </div>

            </div>

            <br/>
            <div className="about-card">
                <p>- A Short Bio of <strong>Du Min Chen</strong></p>
                <div>
                    <ul>
                        <li>I immigrated to U.S. when I was 14.</li>
                        <li>I am a full stack software developer passionate about computer hardwares and technology.</li>
                        <li>I seek to create programs and apps that transform human lives for better through efficiency.</li>
                        <li></li>
                    </ul>
                    <p>
                        <a href="https://github.com/Dumin1120"><img src="https://api.iconify.design/eva:github-fill.svg" alt="octocat" /></a>
                        Visit Dumins's<a href="https://github.com/Dumin1120">GitHub</a>
                    </p>
                </div>
            </div>


            <br/>


            <div className="daniel-card">
                <p>- A Short Bio of <strong>Quisa Hines</strong></p>
                <div>
                    <ul>
                        <li>Born and Raised in the USA</li>
                        <li>I started my career in IT as an App Support Specialist for a proprietary software. Im now a Full Stack Web Developer, looking to leave my digital imprint.</li>
                        <li>I enjoy City Biking and Trap Cardio!!</li>
                    </ul>
                    <p>
                        <a href="https://github.com/Dequisa"><img src="https://api.iconify.design/eva:github-fill.svg" alt="octocat" /></a>
                        Visit Quisa's<a href="https://github.com/Dequisa">GitHub</a>
                    </p>
                </div>

            </div>

        </div>
    )
};

export default About;