
// async amd await challenge
new Promise((resolve, reject) => {
    setTimeout(() => {
        document.getElementById('t-1').style.display = 'block';
        resolve()
    }, 1000)
}).then(() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.getElementById('t-2').style.display = 'block';
            resolve()
        }, 1000)
    })
}).then(() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.getElementById('t-3').style.display = 'block';
            resolve()
        }, 1000)
    })
}).then(() => {
    setTimeout(() => {
        document.getElementById('t-4').style.display = 'block';
    }, 1000)
})

// async amd await challenge

async function displayH1() {
    await new Promise((resolve) => {
        setTimeout(() => {
            document.getElementById('t-1').style.display = 'block';
            resolve()
        }, 1000)
    })
    await new Promise((resolve) => {
        setTimeout(() => {
            document.getElementById('t-2').style.display = 'block';
            resolve()
        }, 1000)
    })
    await new Promise((resolve) => {
        setTimeout(() => {
            document.getElementById('t-3').style.display = 'block';
            resolve()
        }, 1000)
    })
    setTimeout(() => {
        document.getElementById('t-4').style.display = 'block';
    }, 1000)
}

displayH1()