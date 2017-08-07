/*
 helpers
*/
const h = {
    getRandomInt: (min, max) => {
        if(max === min || max < min) {
            console.log(`max(${max}) cannot be greater then min(${min})`);
            return;
        }

        var result = Math.floor(Math.random() * (max - min + 1)) + min;
        return result;
    },
    getNegOrPos: () => { 
        if (Math.random() > .5) { 
            return 1
        } else {
            return -1
        }
    },
    onError: (error) => console.log(error),
    windowWidth: window.innerWidth,
    windowHeight: window.innerHeight,
    map: (value, start1, stop1, start2, stop2) => {
        return start2 + (stop2 - start2) * ((value - start1) / (stop1 - start1))
    }
};

export default h;