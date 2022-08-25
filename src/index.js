import _ from 'lodash';
import { genRand, genArray } from './components/randGen.js'; 
import { MergeSort } from './components/mergeSort.js'; 
//for watching the html file 
require('./home.html')

const MainBody = document.getElementById('MainBody'); 

const unsorted = genArray(9) 
const sorted = MergeSort(unsorted);
const displayUnsorted = document.createElement('p');
displayUnsorted.innerHTML = `Unsorted array ${unsorted} `
const displaySorted = document.createElement('p')
    displaySorted.innerHTML = `Sorted array ${sorted}`;

MainBody.appendChild(displayUnsorted);
MainBody.appendChild(displaySorted); 





