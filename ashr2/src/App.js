import logo from './logo.svg';
import './App.css';
import CardContainer from './components/CardContainer/CardContainer';
import HorizontalCard from './components/Card/Card';
function App() {
  return (
      <div className="App">
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
       technologies = {["python", "pytorch"]}
       animationUrl = 'https://assets6.lottiefiles.com/packages/lf20_y43UmaPSlu.json'
        />
      </div>
  );
}

export default App;
