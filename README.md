<div id="top" align="center">
  
  <a href="https://github.com/Kmachappy/Algo-Visualizer">
  <img src="https://i.imgur.com/Yt7Qsxz.png" alt="Logo" width="150" height="150">
  </a>

## [Algorithm Visualizer](https://algorithm-visual.vercel.app/)

  <p align="center">
    <p>An algorithm visualizer created with React, Typescript, and GraphQL.</p>
    <a href="https://algorithm-visual.vercel.app/"><strong>Live Website - AlgoVisualizer</strong></a>
    <br />
 React Web Application built on <br/>
    <a href="https://reactjs.org/">React</a>
    ·
    <a href="https://www.typescriptlang.org/">TypeScript</a>
    ·
    <a href="https://tailwindcss.com/">TailwindCSS</a>
  </p>
</div>

# About

Description            |  Screenshot
:---:|:----:
|<p align="left">- A simple React web application made to visualize algorithms <br> - Users will be able to choose from one of the sorting algorithms or pathfinding algorithms to explore and visualize. <br>- Users are able to choose visualizer array size and speed<br> - Users are able to stop visualizer and reset the visualizer to its original state </p> | ![https://i.imgur.com/Y26pUBA.jpg](https://i.imgur.com/DohNvTA.gif) |

<p align="right">(<a href="#top">back to top</a>)</p>

# 

# Component Architecture

```mermaid
flowchart LR
App-->Navbar
App-->Home
App-->Category
Category-->SortingPage
Category-->PathfindingPage
PathfindingPage-->Visualizer
SortingPage-->SortingVisualizer
SortingVisualizer-->BubbleSort
SortingVisualizer-->InsertionSort
SortingVisualizer-->MergeSort
SortingVisualizer-->QuickSort
SortingVisualizer-->BogoSort
App-->Footer


```

<p align="right">(<a href="#top">back to top</a>)</p>



Home            |  Visualizer
:---:|:----:
|![home](https://i.imgur.com/YYRDfI6.jpg) | ![Visualizer](https://i.imgur.com/Y26pUBA.jpg) |

<p align="right">(<a href="#top">back to top</a>)</p
https://i.imgur.com/YYRDfI6.jpg