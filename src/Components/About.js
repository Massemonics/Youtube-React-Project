import './About.css'
const About = () => {
    return (
        <div className="about">
             <p>A YouTube mock-up that uses the YouTube API, to renders videos and allows the user post comments</p>
            <div className="daniel-card">
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

            <div>
            <p>A Short Bio of Du Min Chen </p>
            <a href="https://github.com/Dumin1120">Visit Dumins's GitHub </a>
            </div>


            <div>
            <p>A Short Bio of Quisa Hines </p>
            <a href="https://github.com/Dequisa">Visit Quisa's GitHub </a>
            </div>
        </div>
    )
};

export default About;