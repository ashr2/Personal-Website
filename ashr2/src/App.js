import './App.css';
import CardContainer from './components/CardContainer/CardContainer';
import AboutMe from './components/AboutMe/AboutMe';
import HorizontalCard from './components/Card/Card';
function App() {
  return (
      <div className="App">
        <AboutMe 
          name="Ashwath Rajesh"
          subheader="Aspiring Software Engineer"
          bio={<div><p>
          &emsp;I'm an ambitious Computer Science and Mathematics student from the University of Maryland, 
          who is passionate about blending the mathematical and programming realms to craft 
          innovative solutions. My proficiency spans various languages, including Java, Python, Ruby, 
          C/C++, SQL, JavaScript, and HTML/CSS, with an emphasis on leveraging frameworks 
          such as React and Node.js to develop interactive applications.
          </p>
          <p>
          &emsp; As an undergraduate research assistant, 
          I've honed my skills in machine learning and image recognition, 
          developing a highly accurate model using Python and PyTorch. 
          As a Teaching Assistant, I've demonstrated my ability to deliver comprehensive support 
          and impart crucial knowledge to a large class of future computer scientists, 
          deepening their understanding of the mathematics that underpin our field.
          </p>
          <p>
          &emsp;My passion for solving problems and creating user-friendly applications is
           showcased in my projects, which you can look at below
           </p>
          </div>}
          image="https://media.licdn.com/dms/image/C4D03AQEGSlXl4AjCUQ/profile-displayphoto-shrink_800_800/0/1632510459980?e=2147483647&v=beta&t=Fk93WwmGmt6jmo2fM7G58i51vBdwuddd9K7x6Tx5Eug" />
        <HorizontalCard title = "HOOP DETECTION MODEL"
        description = {<p>I successfully developed and trained an image recognition model leveraging <strong> Python </strong> and <strong>PyTorch</strong>,
        which notably <strong>reduced prediction errors</strong> to an average of just <strong>0.05</strong>. 
       I further engineered a Python module using the <strong>Python Imaging Library</strong> to augment a PyTorch Dataset
        with randomly transformed hoop images superimposed onto varied backgrounds. 
       My <strong>proficiency with PyTorch</strong> also extended to training an autoencoder, logging training outcomes, 
      and visualizing these results through Tensorboard, thereby <strong>facilitating the pinpointing of hoop positions 
       in various image scenarios</strong>. Throughout this endeavor, I was supervised and collaborated closely 
       with Ph.D. student Levi Burner.</p>}
       technologies = {["python", "pytorch", "tensorflow"]}
       animationUrl = 'https://assets4.lottiefiles.com/packages/lf20_BKckfkyaDd.json'
        />
      <HorizontalCard title = "ETH TRADING BACKTESTING TOOL"
        description = {<p>This tool allows users to backtest their trading algorithms by utilizing
          data from Binances Market Data API. I have implemented two key features in this tool. 
          Firstly, I created a command-line interface that enables users to generate a CSV file
           containing minute-by-minute ETH price in USD for a specified range of days. Secondly,
            I incorporated another feature that generates a CSV file listing the profits of 
            the user's trading algorithm for a specified range of days. This tool provides 
            a convenient way for users to evaluate and analyze the performance of their Ethereum 
            trading algorithms.</p>}
       technologies = {["python", "binance"]}
       animationUrl = 'https://assets8.lottiefiles.com/packages/lf20_yvmyimd3.json'
        />
      <HorizontalCard title = "TERRAPIN TENANTS"
        description = {<p>This full-stack web application is designed to help users find 
          housing in the College Park area, either by subleasing their own property or 
          finding others to sublet from. To ensure secure image storage and retrieval, 
          I implemented strong security access rules using Firebase Storage. 
          I also focused on creating a visually appealing user experience, 
          showcasing apartments in an engaging way. Additionally, I 
          integrated Google Sheets for efficient storage and retrieval of apartment data
           within the application. This leasing app aims to provide a convenient and 
           user-friendly platform for individuals seeking housing options in College Park.</p>}
       technologies = {["react", "html", "css", "firebase"]}
       animationUrl = 'https://assets6.lottiefiles.com/packages/lf20_y43UmaPSlu.json'
        />
      </div>
  );
}

export default App;
