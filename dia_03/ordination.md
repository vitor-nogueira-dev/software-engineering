### Ordenação

#### Tipos de ordenação
- Insertion Sort, Selection Sort, Bubble Sort, Shell Sort, Heap Sort, Quick Sort, Merge Sort, Radix Sort, etc.
- Tempo de execução.
- Recursos necessários: estruturas, memório e processamento.
- Busca em dicionário desordenado.

1. Buble Sort
  - O Bubble Sort é um algoritmo de ordenação simples. Ele percorre o vetor diversas vezes, e a cada passagem compara os elementos adjacentes e os troca de posição se estiverem na ordem errada.
  - No pior caso, o Bubble Sort tem complexidade O(n^2), onde n é o número de elementos no vetor.
  - Ex:
```js 
function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
```

2. Quick Sort
  - O Quick Sort é um algoritmo de ordenação muito eficiente e bastante utilizado. Ele é baseado no método de divisão e conquista. O algoritmo escolhe um elemento como pivô e particiona o vetor de forma que os elementos menores que o pivô fiquem à esquerda e os maiores à direita.
  - No pior caso, o Quick Sort tem complexidade O(n^2), onde n é o número de elementos no vetor. No entanto, em média, o Quick Sort tem complexidade O(n log n).
  - Ex:
```js
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let pivot = arr[0];
  let left = [];
  let right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return quickSort(left).concat(pivot, quickSort(right));
}
```

3. Merge Sort
  - O Merge Sort é um algoritmo de ordenação estável e eficiente. Ele é baseado no método de divisão e conquista. O algoritmo divide o vetor em duas metades, ordena cada metade recursivamente e depois combina as duas metades ordenadas. 
  - O Merge Sort tem complexidade O(n log n) em todos os casos.
  - Ex:
```js
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let middle = Math.floor(arr.length / 2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}