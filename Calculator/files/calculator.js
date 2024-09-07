/**
 * @Author: Your name
 * @Date:   2024-08-09 14:36:22
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2024-08-13 21:53:57
 */
const display = document.querySelector('#display');
        const buttons = document.querySelectorAll('input[type="button"]');

buttons.forEach((item) => {
    item.onclick = () => {
        if (item.id === 'clear') {
            display.value = '';
        } else if (item.id === 'backspace') {
            display.value = display.value.slice(0, -1);
        } else if (item.id === 'equal') {
            if (display.value !== '') {
                try {
                    display.value = eval(display.value);
                } catch {
                    display.value = 'Error';
                    setTimeout(() => (display.value = ''), 1000);
                }
            } else {
                display.value = '0';
                setTimeout(() => (display.value = ''), 1000);
            }
        } else {
            display.value += item.value;
        }
    };
});