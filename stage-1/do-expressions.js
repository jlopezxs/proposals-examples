
const threashold = 1;
const number = 1;

const cacheStateDo = do {
    if(number === threashold) {
        'hit';
    } else {
        'miss';
    }
};

// is equivalent to:
const cacheState = number === threashold ? 'hit' : 'miss';

console.log('cacheStateDo', cacheStateDo)
console.log('cacheState', cacheState)