document.getElementById("btn-donate").addEventListener("click", function () {
    let hide = selectId('main-content').classList.remove('hidden');
});
document.getElementById('btn-history').addEventListener('click', function(){
    let hide = selectId('main-content').classList.add('hidden');
    let showHistory = selectId('history').classList.remove('hidden');
})