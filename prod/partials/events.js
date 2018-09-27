// Imports
import from_index from '../index.js';

let state = '';

// Desktop
if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent))) {
    
    document.getElementById('component_app').addEventListener('click', (event) => {
        state = from_index.Handle_return_state();

        // console.log('state in events');
        state.events.mouse.click.clientX = event.clientX;
        state.events.mouse.click.clientY = event.clientY;
        console.log(state.events.mouse.click.clientX);
        console.log(state.events.mouse.click.clientY);
        console.log('click');

        // x axis: 1
        if (
            ((event.clientX > (state.ux.dimensions.width8 * 0)) && (event.clientY > (state.ux.dimensions.height8 * 0))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 1)) && (event.clientY < (state.ux.dimensions.height8 * 1)))
        ) {
            console.log('mouse is in clientX:1 x clientY:1 grid');
            state.events.mouse.clientX = 1;
            state.events.mouse.clientY = 1;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 0)) && (event.clientY > (state.ux.dimensions.height8 * 1))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 1)) && (event.clientY < (state.ux.dimensions.height8 * 2)))
        ) {
            console.log('mouse is in clientX:1 x clientY:2 grid');
            state.events.mouse.clientX = 1;
            state.events.mouse.clientY = 2;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 0)) && (event.clientY > (state.ux.dimensions.height8 * 2))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 1)) && (event.clientY < (state.ux.dimensions.height8 * 3)))
        ) {
            console.log('mouse is in clientX:1 x clientY:3 grid');
            state.events.mouse.clientX = 1;
            state.events.mouse.clientY = 3;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 0)) && (event.clientY > (state.ux.dimensions.height8 * 3))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 1)) && (event.clientY < (state.ux.dimensions.height8 * 4)))
        ) {
            console.log('mouse is in clientX:1 x clientY:4 grid');
            state.events.mouse.clientX = 1;
            state.events.mouse.clientY = 4;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 0)) && (event.clientY > (state.ux.dimensions.height8 * 4))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 1)) && (event.clientY < (state.ux.dimensions.height8 * 5)))
        ) {
            console.log('mouse is in clientX:1 x clientY:5 grid');
            state.events.mouse.clientX = 1;
            state.events.mouse.clientY = 5;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 0)) && (event.clientY > (state.ux.dimensions.height8 * 5))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 1)) && (event.clientY < (state.ux.dimensions.height8 * 6)))
        ) {
            console.log('mouse is in clientX:1 x clientY:6 grid');
            state.events.mouse.clientX = 1;
            state.events.mouse.clientY = 6;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 0)) && (event.clientY > (state.ux.dimensions.height8 * 6))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 1)) && (event.clientY < (state.ux.dimensions.height8 * 7)))
        ) {
            console.log('mouse is in clientX:1 x clientY:7 grid');
            state.events.mouse.clientX = 1;
            state.events.mouse.clientY = 7;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 0)) && (event.clientY > (state.ux.dimensions.height8 * 7))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 1)) && (event.clientY < (state.ux.dimensions.height8 * 8)))
        ) {
            console.log('mouse is in clientX:1 x clientY:8 grid');
            state.events.mouse.clientX = 1;
            state.events.mouse.clientY = 8;
        };

        // x axis: 2

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 1)) && (event.clientY > (state.ux.dimensions.height8 * 0))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 2)) && (event.clientY < (state.ux.dimensions.height8 * 1)))) {
            console.log('mouse is in clientX:2 x clientY:1 grid');
            state.events.mouse.clientX = 2;
            state.events.mouse.clientY = 1;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 1)) && (event.clientY > (state.ux.dimensions.height8 * 1))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 2)) && (event.clientY < (state.ux.dimensions.height8 * 2)))
        ) {
            console.log('mouse is in clientX:2 x clientY:2 grid');
            state.events.mouse.clientX = 2;
            state.events.mouse.clientY = 2;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 1)) && (event.clientY > (state.ux.dimensions.height8 * 2))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 2)) && (event.clientY < (state.ux.dimensions.height8 * 3)))
        ) {
            console.log('mouse is in clientX:2 x clientY:3 grid');
            state.events.mouse.clientX = 2;
            state.events.mouse.clientY = 3;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 1)) && (event.clientY > (state.ux.dimensions.height8 * 3))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 2)) && (event.clientY < (state.ux.dimensions.height8 * 4)))
        ) {
            console.log('mouse is in clientX:2 x clientY:4 grid');
            state.events.mouse.clientX = 2;
            state.events.mouse.clientY = 4;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 1)) && (event.clientY > (state.ux.dimensions.height8 * 4))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 2)) && (event.clientY < (state.ux.dimensions.height8 * 5)))
        ) {
            console.log('mouse is in clientX:2 x clientY:5 grid');
            state.events.mouse.clientX = 2;
            state.events.mouse.clientY = 5;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 1)) && (event.clientY > (state.ux.dimensions.height8 * 5))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 2)) && (event.clientY < (state.ux.dimensions.height8 * 6)))
        ) {
            console.log('mouse is in clientX:2 x clientY:6 grid');
            state.events.mouse.clientX = 2;
            state.events.mouse.clientY = 6;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 1)) && (event.clientY > (state.ux.dimensions.height8 * 6))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 2)) && (event.clientY < (state.ux.dimensions.height8 * 7)))
        ) {
            console.log('mouse is in clientX:2 x clientY:7 grid');
            state.events.mouse.clientX = 2;
            state.events.mouse.clientY = 7;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 1)) && (event.clientY > (state.ux.dimensions.height8 * 7))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 2)) && (event.clientY < (state.ux.dimensions.height8 * 8)))
        ) {
            console.log('mouse is in clientX:2 x clientY:8 grid');
            state.events.mouse.clientX = 2;
            state.events.mouse.clientY = 8;
        };

        // x axis: 3
        if (
            ((event.clientX > (state.ux.dimensions.width8 * 2)) && (event.clientY > (state.ux.dimensions.height8 * 0))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 3)) && (event.clientY < (state.ux.dimensions.height8 * 1)))
        ) {
            console.log('mouse is in clientX:3 x clientY:1 grid');
            state.events.mouse.clientX = 3;
            state.events.mouse.clientY = 1;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 2)) && (event.clientY > (state.ux.dimensions.height8 * 1))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 3)) && (event.clientY < (state.ux.dimensions.height8 * 2)))
        ) {
            console.log('mouse is in clientX:3 x clientY:2 grid');
            state.events.mouse.clientX = 3;
            state.events.mouse.clientY = 2;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 2)) && (event.clientY > (state.ux.dimensions.height8 * 2))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 3)) && (event.clientY < (state.ux.dimensions.height8 * 3)))
        ) {
            console.log('mouse is in clientX:3 x clientY:3 grid');
            state.events.mouse.clientX = 3;
            state.events.mouse.clientY = 3;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 2)) && (event.clientY > (state.ux.dimensions.height8 * 3))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 3)) && (event.clientY < (state.ux.dimensions.height8 * 4)))
        ) {
            console.log('mouse is in clientX:3 x clientY:4 grid');
            state.events.mouse.clientX = 3;
            state.events.mouse.clientY = 4;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 2)) && (event.clientY > (state.ux.dimensions.height8 * 4))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 3)) && (event.clientY < (state.ux.dimensions.height8 * 5)))
        ) {
            console.log('mouse is in clientX:3 x clientY:5 grid');
            state.events.mouse.clientX = 3;
            state.events.mouse.clientY = 5;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 2)) && (event.clientY > (state.ux.dimensions.height8 * 5))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 3)) && (event.clientY < (state.ux.dimensions.height8 * 6)))
        ) {
            console.log('mouse is in clientX:3 x clientY:6 grid');
            state.events.mouse.clientX = 3;
            state.events.mouse.clientY = 6;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 2)) && (event.clientY > (state.ux.dimensions.height8 * 6))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 3)) && (event.clientY < (state.ux.dimensions.height8 * 7)))
        ) {
            console.log('mouse is in clientX:3 x clientY:7 grid');
            state.events.mouse.clientX = 3;
            state.events.mouse.clientY = 7;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 2)) && (event.clientY > (state.ux.dimensions.height8 * 7))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 3)) && (event.clientY < (state.ux.dimensions.height8 * 8)))
        ) {
            console.log('mouse is in clientX:3 x clientY:8 grid');
            state.events.mouse.clientX = 3;
            state.events.mouse.clientY = 8;
        };

        // x axis: 4
        if (
            ((event.clientX > (state.ux.dimensions.width8 * 3)) && (event.clientY > (state.ux.dimensions.height8 * 0))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 4)) && (event.clientY < (state.ux.dimensions.height8 * 1)))
        ) {
            console.log('mouse is in clientX:4 x clientY:1 grid');
            state.events.mouse.clientX = 4;
            state.events.mouse.clientY = 1;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 3)) && (event.clientY > (state.ux.dimensions.height8 * 1))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 4)) && (event.clientY < (state.ux.dimensions.height8 * 2)))
        ) {
            console.log('mouse is in clientX:4 x clientY:2 grid');
            state.events.mouse.clientX = 4;
            state.events.mouse.clientY = 2;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 3)) && (event.clientY > (state.ux.dimensions.height8 * 2))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 4)) && (event.clientY < (state.ux.dimensions.height8 * 3)))
        ) {
            console.log('mouse is in clientX:4 x clientY:3 grid');
            state.events.mouse.clientX = 4;
            state.events.mouse.clientY = 3;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 3)) && (event.clientY > (state.ux.dimensions.height8 * 3))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 4)) && (event.clientY < (state.ux.dimensions.height8 * 4)))
        ) {
            console.log('mouse is in clientX:4 x clientY:4 grid');
            state.events.mouse.clientX = 4;
            state.events.mouse.clientY = 4;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 3)) && (event.clientY > (state.ux.dimensions.height8 * 4))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 4)) && (event.clientY < (state.ux.dimensions.height8 * 5)))
        ) {
            console.log('mouse is in clientX:4 x clientY:5 grid');
            state.events.mouse.clientX = 4;
            state.events.mouse.clientY = 5;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 3)) && (event.clientY > (state.ux.dimensions.height8 * 5))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 4)) && (event.clientY < (state.ux.dimensions.height8 * 6)))
        ) {
            console.log('mouse is in clientX:4 x clientY:6 grid');
            state.events.mouse.clientX = 4;
            state.events.mouse.clientY = 6;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 3)) && (event.clientY > (state.ux.dimensions.height8 * 6))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 4)) && (event.clientY < (state.ux.dimensions.height8 * 7)))
        ) {
            console.log('mouse is in clientX:4 x clientY:7 grid');
            state.events.mouse.clientX = 4;
            state.events.mouse.clientY = 7;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 3)) && (event.clientY > (state.ux.dimensions.height8 * 7))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 4)) && (event.clientY < (state.ux.dimensions.height8 * 8)))
        ) {
            console.log('mouse is in clientX:4 x clientY:8 grid');
            state.events.mouse.clientX = 4;
            state.events.mouse.clientY = 8;
        };

        // x axis: 5
        if (
            ((event.clientX > (state.ux.dimensions.width8 * 4)) && (event.clientY > (state.ux.dimensions.height8 * 0))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 5)) && (event.clientY < (state.ux.dimensions.height8 * 1)))
        ) {
            console.log('mouse is in clientX:5 x clientY:1 grid');
            state.events.mouse.clientX = 5;
            state.events.mouse.clientY = 1;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 4)) && (event.clientY > (state.ux.dimensions.height8 * 1))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 5)) && (event.clientY < (state.ux.dimensions.height8 * 2)))
        ) {
            console.log('mouse is in clientX:5 x clientY:2 grid');
            state.events.mouse.clientX = 5;
            state.events.mouse.clientY = 2;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 4)) && (event.clientY > (state.ux.dimensions.height8 * 2))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 5)) && (event.clientY < (state.ux.dimensions.height8 * 3)))
        ) {
            console.log('mouse is in clientX:5 x clientY:3 grid');
            state.events.mouse.clientX = 5;
            state.events.mouse.clientY = 3;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 4)) && (event.clientY > (state.ux.dimensions.height8 * 3))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 5)) && (event.clientY < (state.ux.dimensions.height8 * 4)))
        ) {
            console.log('mouse is in clientX:5 x clientY:4 grid');
            state.events.mouse.clientX = 5;
            state.events.mouse.clientY = 4;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 4)) && (event.clientY > (state.ux.dimensions.height8 * 4))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 5)) && (event.clientY < (state.ux.dimensions.height8 * 5)))
        ) {
            console.log('mouse is in clientX:5 x clientY:5 grid');
            state.events.mouse.clientX = 5;
            state.events.mouse.clientY = 5;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 4)) && (event.clientY > (state.ux.dimensions.height8 * 5))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 5)) && (event.clientY < (state.ux.dimensions.height8 * 6)))
        ) {
            console.log('mouse is in clientX:5 x clientY:6 grid');
            state.events.mouse.clientX = 5;
            state.events.mouse.clientY = 6;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 4)) && (event.clientY > (state.ux.dimensions.height8 * 6))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 5)) && (event.clientY < (state.ux.dimensions.height8 * 7)))
        ) {
            console.log('mouse is in clientX:5 x clientY:7 grid');
            state.events.mouse.clientX = 5;
            state.events.mouse.clientY = 7;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 4)) && (event.clientY > (state.ux.dimensions.height8 * 7))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 5)) && (event.clientY < (state.ux.dimensions.height8 * 8)))
        ) {
            console.log('mouse is in clientX:5 x clientY:8 grid');
            state.events.mouse.clientX = 5;
            state.events.mouse.clientY = 8;
        };

        // x axis: 6

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 5)) && (event.clientY > (state.ux.dimensions.height8 * 0))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 6)) && (event.clientY < (state.ux.dimensions.height8 * 1)))
        ) {
            console.log('mouse is in clientX:6 x clientY:1 grid');
            state.events.mouse.clientX = 6;
            state.events.mouse.clientY = 1;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 5)) && (event.clientY > (state.ux.dimensions.height8 * 1))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 6)) && (event.clientY < (state.ux.dimensions.height8 * 2)))
        ) {
            console.log('mouse is in clientX:6 x clientY:2 grid');
            state.events.mouse.clientX = 6;
            state.events.mouse.clientY = 2;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 5)) && (event.clientY > (state.ux.dimensions.height8 * 2))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 6)) && (event.clientY < (state.ux.dimensions.height8 * 3)))
        ) {
            console.log('mouse is in clientX:6 x clientY:3 grid');
            state.events.mouse.clientX = 6;
            state.events.mouse.clientY = 3;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 5)) && (event.clientY > (state.ux.dimensions.height8 * 3))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 6)) && (event.clientY < (state.ux.dimensions.height8 * 4)))
        ) {
            console.log('mouse is in clientX:6 x clientY:4 grid');
            state.events.mouse.clientX = 6;
            state.events.mouse.clientY = 4;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 5)) && (event.clientY > (state.ux.dimensions.height8 * 4))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 6)) && (event.clientY < (state.ux.dimensions.height8 * 5)))
        ) {
            console.log('mouse is in clientX:6 x clientY:5 grid');
            state.events.mouse.clientX = 6;
            state.events.mouse.clientY = 5;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 5)) && (event.clientY > (state.ux.dimensions.height8 * 5))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 6)) && (event.clientY < (state.ux.dimensions.height8 * 6)))
        ) {
            console.log('mouse is in clientX:6 x clientY:6 grid');
            state.events.mouse.clientX = 6;
            state.events.mouse.clientY = 6;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 5)) && (event.clientY > (state.ux.dimensions.height8 * 6))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 6)) && (event.clientY < (state.ux.dimensions.height8 * 7)))
        ) {
            console.log('mouse is in clientX:6 x clientY:7 grid');
            state.events.mouse.clientX = 6;
            state.events.mouse.clientY = 7;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 5)) && (event.clientY > (state.ux.dimensions.height8 * 7))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 6)) && (event.clientY < (state.ux.dimensions.height8 * 8)))
        ) {
            console.log('mouse is in clientX:6 x clientY:8 grid');
            state.events.mouse.clientX = 6;
            state.events.mouse.clientY = 8;
        };

        // x axis: 7
        if (
            ((event.clientX > (state.ux.dimensions.width8 * 6)) && (event.clientY > (state.ux.dimensions.height8 * 0))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 7)) && (event.clientY < (state.ux.dimensions.height8 * 1)))
        ) {
            console.log('mouse is in clientX:7 x clientY:1 grid');
            state.events.mouse.clientX = 7;
            state.events.mouse.clientY = 1;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 6)) && (event.clientY > (state.ux.dimensions.height8 * 1))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 7)) && (event.clientY < (state.ux.dimensions.height8 * 2)))
        ) {
            console.log('mouse is in clientX:7 x clientY:2 grid');
            state.events.mouse.clientX = 7;
            state.events.mouse.clientY = 2;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 6)) && (event.clientY > (state.ux.dimensions.height8 * 2))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 7)) && (event.clientY < (state.ux.dimensions.height8 * 3)))
        ) {
            console.log('mouse is in clientX:7 x clientY:3 grid');
            state.events.mouse.clientX = 7;
            state.events.mouse.clientY = 3;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 6)) && (event.clientY > (state.ux.dimensions.height8 * 3))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 7)) && (event.clientY < (state.ux.dimensions.height8 * 4)))
        ) {
            console.log('mouse is in clientX:7 x clientY:4 grid');
            state.events.mouse.clientX = 7;
            state.events.mouse.clientY = 4;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 6)) && (event.clientY > (state.ux.dimensions.height8 * 4))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 7)) && (event.clientY < (state.ux.dimensions.height8 * 5)))
        ) {
            console.log('mouse is in clientX:7 x clientY:5 grid');
            state.events.mouse.clientX = 7;
            state.events.mouse.clientY = 5;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 6)) && (event.clientY > (state.ux.dimensions.height8 * 5))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 7)) && (event.clientY < (state.ux.dimensions.height8 * 6)))
        ) {
            console.log('mouse is in clientX:7 x clientY:6 grid');
            state.events.mouse.clientX = 7;
            state.events.mouse.clientY = 6;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 6)) && (event.clientY > (state.ux.dimensions.height8 * 6))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 7)) && (event.clientY < (state.ux.dimensions.height8 * 7)))
        ) {
            console.log('mouse is in clientX:7 x clientY:7 grid');
            state.events.mouse.clientX = 7;
            state.events.mouse.clientY = 7;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 6)) && (event.clientY > (state.ux.dimensions.height8 * 7))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 7)) && (event.clientY < (state.ux.dimensions.height8 * 8)))
        ) {
            console.log('mouse is in clientX:7 x clientY:8 grid');
            state.events.mouse.clientX = 7;
            state.events.mouse.clientY = 8;
        };

        // x axis: 8
        if (
            ((event.clientX > (state.ux.dimensions.width8 * 7)) && (event.clientY > (state.ux.dimensions.height8 * 0))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 8)) && (event.clientY < (state.ux.dimensions.height8 * 1)))
        ) {
            console.log('mouse is in clientX:8 x clientY:1 grid');
            state.events.mouse.clientX = 8;
            state.events.mouse.clientY = 1;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 7)) && (event.clientY > (state.ux.dimensions.height8 * 1))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 8)) && (event.clientY < (state.ux.dimensions.height8 * 2)))
        ) {
            console.log('mouse is in clientX:8 x clientY:2 grid');
            state.events.mouse.clientX = 8;
            state.events.mouse.clientY = 2;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 7)) && (event.clientY > (state.ux.dimensions.height8 * 2))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 8)) && (event.clientY < (state.ux.dimensions.height8 * 3)))
        ) {
            console.log('mouse is in clientX:8 x clientY:3 grid');
            state.events.mouse.clientX = 8;
            state.events.mouse.clientY = 3;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 7)) && (event.clientY > (state.ux.dimensions.height8 * 3))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 8)) && (event.clientY < (state.ux.dimensions.height8 * 4)))
        ) {
            console.log('mouse is in clientX:8 x clientY:4 grid');
            state.events.mouse.clientX = 8;
            state.events.mouse.clientY = 4;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 7)) && (event.clientY > (state.ux.dimensions.height8 * 4))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 8)) && (event.clientY < (state.ux.dimensions.height8 * 5)))
        ) {
            console.log('mouse is in clientX:8 x clientY:5 grid');
            state.events.mouse.clientX = 8;
            state.events.mouse.clientY = 5;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 7)) && (event.clientY > (state.ux.dimensions.height8 * 5))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 8)) && (event.clientY < (state.ux.dimensions.height8 * 6)))
        ) {
            console.log('mouse is in clientX:8 x clientY:6 grid');
            state.events.mouse.clientX = 8;
            state.events.mouse.clientY = 6;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 7)) && (event.clientY > (state.ux.dimensions.height8 * 6))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 8)) && (event.clientY < (state.ux.dimensions.height8 * 7)))
        ) {
            console.log('mouse is in clientX:8 x clientY:7 grid');
            state.events.mouse.clientX = 8;
            state.events.mouse.clientY = 7;
        };

        if (
            ((event.clientX > (state.ux.dimensions.width8 * 7)) && (event.clientY > (state.ux.dimensions.height8 * 7))) &&
            ((event.clientX < (state.ux.dimensions.width8 * 8)) && (event.clientY < (state.ux.dimensions.height8 * 8)))
        ) {
            console.log('mouse is in clientX:8 x clientY:8 grid');
            state.events.mouse.clientX = 8;
            state.events.mouse.clientY = 8;
        };

        from_index.Handle_get_state_from_events();

    });

    document.getElementById('component_app').addEventListener('wheel', (event) => {
        state = from_index.Handle_return_state();

        // console.log('state in events');
        
        console.log('wheel');

        if (event.deltaY < 0) {
            console.log('scrolling up');
        };

        if (event.deltaY > 0) {
            console.log('scrolling down');
        };

        from_index.Handle_get_state_from_events();

    });

    document.getElementById('component_app').addEventListener('scroll', (event) => {
        state = from_index.Handle_return_state();
        // console.log('state in events');

    });

    document.getElementById('component_app').addEventListener('mouseup', (event) => {
        state = from_index.Handle_return_state();
        state.events.mouse.up = true;
        // console.log('state in events');
        console.log('mouseup');
        from_index.Handle_get_state_from_events();

    });

    document.getElementById('component_app').addEventListener('mousedown', (event) => {
        state = from_index.Handle_return_state();
        state.events.mouse.up = false;
        // console.log('state in events');
        console.log('mousedown');
        from_index.Handle_get_state_from_events();

    });

    document.getElementById('component_app').addEventListener('mouseenter', (event) => {
        state = from_index.Handle_return_state();
        state.events.mouse.enter = true;
        state.events.mouse.leave = false;
        // console.log('state in events');
        console.log('mouseenter');
        from_index.Handle_get_state_from_events();

    });

    document.getElementById('component_app').addEventListener('mouseleave', (event) => {
        state = from_index.Handle_return_state();
        state.events.mouse.enter = false;
        state.events.mouse.leave = true;
        // console.log('state in events');
        console.log('mouseleave');
        from_index.Handle_get_state_from_events();

    });

    document.getElementById('component_app').addEventListener('mousemove', (event) => {
        state = from_index.Handle_return_state();
        // console.log('state in events');
        if (state.events.mouse.up == true) {
            console.log('drop');
        };
        if (state.events.mouse.up == false) {
            console.log('drag');
        };

        if ((state.events) != null) {

                    state.events.mouse.clientX = event.clientX;
                    state.events.mouse.clientY = event.clientY;

                    /*
                    if (state.ui.interaction.easel.display == true) {

                        if (state.events.mouse.up == true) {

                            state.ui.interaction.easel.pencil.push({
                                'xaxis': event.clientX,
                                'yaxis': event.clientY
                            })
                            if (document.getElementById('component_app_interaction_easel_pencil') != null) {
                                document.getElementById('component_app_interaction_easel_pencil').innerHTML = '';

                                for (let i = 0; i < state.ui.interaction.easel.pencil.length; i++) {
                                    document.getElementById('component_app_interaction_easel_pencil').innerHTML += '<div class="background-dark-yellow-9 position_absolute margin_auto width_1vh height_1vh" style="top:' + (state.ui.interaction.easel.pencil[i].yaxis) + 'px; left:' + (state.ui.interaction.easel.pencil[i].xaxis) + 'px;"></div>'
                                };
                            };
                        };

                        if (state.events.mouse.down == true) {

                            state.ui.interaction.easel.pen.push({
                                'xaxis': event.clientX,
                                'yaxis': event.clientY
                            })

                            if (document.getElementById('component_app_interaction_easel_pen') != null) {
                                document.getElementById('component_app_interaction_easel_pen').innerHTML = '';

                                for (let i = 0; i < state.ui.interaction.easel.pen.length; i++) {
                                    document.getElementById('component_app_interaction_easel_pen').innerHTML += '<div class="background-light-yellow-9 position_absolute margin_auto width_1vh height_1vh" style="top:' + (state.ui.interaction.easel.pen[i].yaxis) + 'px; left:' + (state.ui.interaction.easel.pen[i].xaxis) + 'px;"></div>'
                                };
                            };
                        };
                    };
                    */

                    if (state.events.mouse.up == true) {
                        state.events.mouse.drop.clientX = event.clientX;
                        state.events.mouse.drop.clientY = event.clientY;
                    };

                    if (state.events.mouse.up == false) {
                        console.log('mousemove + mouse.down = "dragging"');
                        state.events.mouse.drag.clientX = event.clientX;
                        state.events.mouse.drag.clientY = event.clientY;
                    };

                };

        console.log('mousemove');
        from_index.Handle_get_state_from_events();

    });

    document.getElementById('component_app').addEventListener('keydown', (event) => {
        state = from_index.Handle_return_state();
        // console.log('state in events');
        console.log('keydown');

        let keyCode = event.keyCode;
        console.log('keyCode: ' + keyCode);
        console.log('keys held: ');
        console.log(state.events.key.keys);

        let matched = false;

        for (var i = 0; i < state.events.key.keys.length; i++) {
            if (state.events.key.keys[i] == event.keyCode) {
                matched = true;
            };
        };

        if (matched == false) {
            state.events.key.keys.push(event.keyCode);
        };

        // zero
        if (keyCode == 48) {
            console.log('0')
        };
        // one
        if (keyCode == 49) {
            console.log('1')
        };
        // two
        if (keyCode == 50) {
            console.log('2')
        };
        // three
        if (keyCode == 51) {
            console.log('3')
        };
        // four
        if (keyCode == 52) {
            console.log('4')
        };
        // five
        if (keyCode == 53) {
            console.log('5')
        };
        // six
        if (keyCode == 54) {
            console.log('6')
        };
        // seven
        if (keyCode == 55) {
            console.log('7')
        };
        // eight
        if (keyCode == 56) {
            console.log('8')
        };
        // nine
        if (keyCode == 57) {
            console.log('9')
        };
        // plus
        if (keyCode == 187) {
        };
        // minus
        if (keyCode == 189) {
        };

        // backspace
        if (event.keyCode == 8) {
            state.ui.modal.nav.top.transform = !state.ui.modal.nav.top.transform;
            state.ui.modal.nav.bottom.transform = !state.ui.modal.nav.bottom.transform;
        };

        // tab
        if (event.keyCode == 9) {
            console.log('tab');
            from_index.Handle_check_route('reset');
        };

        // enter
        if (event.keyCode == 13) {

            state.ui.gui.scroll.y.display = true;
            state.ui.gui.scroll.y.opacity = true;

            setTimeout(function() {
                state.ui.gui.scroll.y.transform = !state.ui.gui.scroll.y.transform;
            }, 1000);

        };

        // esc
        if (event.keyCode == 27) {
            console.log('esc');
            state.ui.gui.top_left.display = !state.ui.gui.top_left.display;
        };

        // arrow left
        if (event.keyCode == 37) {
            console.log('arrow');
            state.ui.stage.enneagon.xaxis -= 1;
            console.log(state.ui.stage.enneagon.xaxis);
        };

        // arrow down
        if (event.keyCode == 38) {
            console.log('arrow');
            state.ui.stage.enneagon.yaxis -= 1;
            console.log(state.ui.stage.enneagon.yaxis);
        };

        // arrow up
        if (event.keyCode == 39) {
            console.log('arrow');
            state.ui.stage.enneagon.xaxis += 1;
            console.log(state.ui.stage.enneagon.xaxis);
        };

        // arrow right
        if (event.keyCode == 40) {
            console.log('arrow');
            state.ui.stage.enneagon.yaxis += 1;
            console.log(state.ui.stage.enneagon.yaxis);
        };

        // a
        if (event.keyCode == 65) {
            state.ui.interaction.player_1.xaxis -= 1;

            if (state.ui.interaction.player_1.display == true) {
                if (state.ui.interaction.player_1.xaxis == state.ui.pieces.workspace.desk.xaxis) {
                    state.data.score.current.met += 1; };
            };

        };

        // d
        if (event.keyCode == 68) {
            state.ui.interaction.player_1.xaxis += 1;

            if (state.ui.interaction.player_1.display == true) {
                if (state.ui.interaction.player_1.xaxis == state.ui.pieces.workspace.desk.xaxis) {
                    state.data.score.current.met += 1; };
            };

        };

        // q
        if (event.keyCode == 81) {
            from_index.Handle_check_route('home');
        };

        // w
        if (event.keyCode == 83) {
            state.ui.interaction.player_1.yaxis -= 1;
        };

        // s
        if (event.keyCode == 87) {
            state.ui.interaction.player_1.yaxis += 1;
        };

        if (keyCode == 192) {
        };

        from_index.Handle_get_state_from_events();

    });

    document.getElementById('component_app').addEventListener('keyup', (event) => {
        state = from_index.Handle_return_state();
        // console.log('state in events');
        console.log('keyup');

        state = from_index.Handle_return_state();
        console.log('event: keyup');
        console.log(event);
        var index = state.events.key.keys.indexOf(event.keyCode);

        if (index > -1) {
            state.events.key.keys.splice(index, 1);
        };
        
        from_index.Handle_get_state_from_events();

    });

};

// Mobile
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
    component_app.addEventListener("click", function(event) {
        alert('on phone');
    });
};

let Handle_return_state_from_events = () => {
    return state
};

export default {
    state,
    Handle_return_state_from_events
}