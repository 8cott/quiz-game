function clickButton(ans) {
const click = document.getElementById(ans)
    click.addEventListener('click', () => {
        if (click.value === results.correct_answer) {
            console.log('correct');
            document.getElementById(ans).style.backgroundColor = 'green'
            document.getElementById(ans).style.color = 'white'
            document.getElementById('results').innerHTML = 'Correct'
            document.getElementById('results').style.color = 'green'
        } else {
            console.log('incorrect');
            document.getElementById(ans).style.backgroundColor = 'red'
            document.getElementById(ans).style.color = 'white'
            document.getElementById('results').innerHTML = 'Incorrect'
            document.getElementById('results').style.color = 'red'
        }
    })
}