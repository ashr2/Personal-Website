import './App.css';
import CardContainer from './components/CardContainer/CardContainer';
import AboutMe from './components/AboutMe/AboutMe';
import HorizontalCard from './components/Card/Card';
import TechStack from './components/TechStack/TechStack';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <div className="App"> 
        <AboutMe
          name="Ashwath Rajesh"
          subheader="Aspiring Software Engineer"
          bio={<div><p>
          &emsp;I'm an ambitious Computer Science and Mathematics student from the University of Maryland, 
          who is passionate about <strong>blending the mathematical and programming realms </strong>to craft 
          innovative solutions. My proficiency spans various languages, including <strong>Java, Python, Ruby, 
          C/C++, SQL, JavaScript, and HTML/CSS </strong>, with an emphasis on leveraging frameworks 
          such as <strong>React and Node.js</strong> to develop interactive applications.
          </p>
          <p>
          &emsp; As an undergraduate research assistant, 
          I've honed my skills in <strong>machine learning and image recognition</strong>, 
          developing a highly accurate model using Python and PyTorch. 
          As a Teaching Assistant, I've demonstrated my ability to<strong> deliver comprehensive support </strong>
          and impart crucial knowledge to a large class of future computer scientists, 
          deepening their understanding of the mathematics that underpin our field.
          </p>
          <p>
          &emsp;My passion for <strong>solving problems and creating user-friendly applications </strong>is
           showcased in my projects, which you can look at below
           </p>
          </div>}
          image="https://media.licdn.com/dms/image/C4D03AQEGSlXl4AjCUQ/profile-displayphoto-shrink_800_800/0/1632510459980?e=2147483647&v=beta&t=Fk93WwmGmt6jmo2fM7G58i51vBdwuddd9K7x6Tx5Eug" />

        <TechStack/>
        <HorizontalCard title = "HOOP DETECTION MODEL"
        id = "hoopdetectionmodel"
        description = {<p>I successfully developed and trained an image recognition model leveraging <strong> Python </strong> and <strong>PyTorch</strong>,
        which notably <strong>reduced prediction errors</strong> to an average of just <strong>0.05</strong>. 
       I further engineered a Python module using the <strong>Python Imaging Library</strong> to augment a PyTorch Dataset
        with randomly transformed hoop images superimposed onto varied backgrounds. 
       My <strong>proficiency with PyTorch</strong> also extended to training an autoencoder, logging training outcomes, 
      and visualizing these results through Tensorboard, thereby <strong>facilitating the pinpointing of hoop positions 
       in various image scenarios</strong>. I built this under the supervision of Ph.D. student Levi Burner.</p>}
       technologies = {["python", "pytorch", "tensorflow"]}
       github="https://github.com/ashr2/PRG-Hoop-Recognition"
       back = "Hello"
       animationUrl = 'https://assets4.lottiefiles.com/packages/lf20_BKckfkyaDd.json'
        />
      <HorizontalCard title = "TERRAPIN TENANTS"
        cardId = "terrapintenants"
        description = {<p>This <strong>full-stack web application </strong> is designed to help users find 
          housing in the College Park area, either by subleasing their own property or 
          finding others to sublet from. To ensure secure image storage and retrieval, 
          I <strong>implemented strong security access rules </strong> using Firebase Storage. 
          I also focused on creating a <strong>visually appealing user experience</strong>, 
          showcasing apartments in an engaging way. This leasing app aims to provide a convenient and 
           user-friendly platform for individuals seeking housing options in College Park.</p>}
       demo="terrapintenants.com"
       technologies = {["react", "html", "css", "firebase"]}
       animationUrl = 'https://assets6.lottiefiles.com/packages/lf20_y43UmaPSlu.json'
        />

      <HorizontalCard title = "ETH TRADING BACKTESTING TOOL"
        cardId = "ethtradingbacktestingtool"    
        description = {<p>This tool allows users to backtest their trading algorithms by utilizing
          data from Binances Market Data API. I have implemented two key features in this tool. 
          Firstly, I <strong>created a command-line interface </strong>that enables users to generate a CSV file
           containing minute-by-minute ETH price in USD for a specified range of days. Secondly,
            I incorporated another feature that generates a CSV file listing the profits of 
            the user's trading algorithm for a specified range of days. This tool <strong>provides 
            a convenient way for users to evaluate and analyze </strong> the performance of their Ethereum 
            trading algorithms.</p>}
       technologies = {["python", "binance"]}
       github = "https://github.com/ashr2/ETH-Trading-Backtesting-Tool"
       animationUrl = 'https://assets8.lottiefiles.com/packages/lf20_yvmyimd3.json'
        />

        <HorizontalCard title = "MicroCaml"
        cardId = "microcaml"
        description = {<p>
          Developed a dynamically-typed derivative of OCaml, named MicroCaml, 
          and its associated utop variant, Microtop. <strong>Created a lexer to tokenize 
          string inputs </strong> in line with MicroCaml syntax, followed by the design of 
          a recursive descent parser for interpreting these tokens into an 
          Abstract Syntax Tree (AST). Subsequently <strong>developed an interpreter to 
          read the AST </strong>and compute values based on the operational semantics 
          of the MicroCaml language. This variant was built with the goal to
           understand and address the complexities associated with dynamic typing 
           in programming languages, thus providing a rich learning ground for 
           <strong>language design and computational logic</strong>.
        </p>}
       technologies = {["ocaml"]}
       github = "https://github.com/cmsc330-umd/spring23/tree/main/projects/project4a"
       animationUrl = 'https://assets7.lottiefiles.com/packages/lf20_mXdqmT1SH2.json'
        />

      <HorizontalCard title = "ShellSenior"
      cardId = "shellsenior"
        description = {<p>
          This shell implementation project is designed to <strong>parse and execute commands 
          in a Unix-like system environment</strong>, either as standalone commands or interconnected 
          via conjunctions like logical 'AND', piping, or subshell operations. 
          To ensure reliable process management, I <strong>utilized the power of C language</strong>, 
          featuring functions like fork(), execvp(), and dup2(). In addition, I <strong>integrated a 
          command tree structure </strong>for efficient storage and retrieval of parsed 
          command data within the shell. This project underscores my <strong>competence in 
          low-level system programming</strong> and aims to demonstrate my understanding of 
          Unix-like system operations and process management.
        </p>}
       demo = "Unavailable"
       technologies = {["c"]}
       animationUrl = 'https://assets3.lottiefiles.com/packages/lf20_kRvxOg5OXJ.json'
        />
      </div>
      </BrowserRouter>
  );
}

export default App;