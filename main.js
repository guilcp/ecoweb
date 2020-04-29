function truncateText(elements, maxLength) {
    elements.forEach(element => {
        truncated = element.innerText;

        if (truncated.length > maxLength) {
            truncated = truncated.substr(0, maxLength) + '...';
        }
        element.innerText = truncated;
    });

}

truncateText(document.querySelectorAll('#carouselArtigos .card-text'), 40);
truncateText(document.querySelectorAll('#carouselArtigos .card-title'), 25);
truncateText(document.querySelectorAll('#exclusivo .card-text'), 300);
truncateText(document.querySelectorAll('#grid .card-text'), 100);
truncateText(document.querySelectorAll('#list .card-text'), 102);



function switchGridList(element) {
    console.log(element.id);
    if (element.id == 'optionGrid') {
        document.getElementById('grid').display = auto;
        document.getElementById('list').display = none;
    } else if (element.id == 'optionList') {
        document.getElementById('grid').display = none;
        document.getElementById('list').display = auto;
    }
}

var elements = document.getElementsByClassName("column");

var i;

function listView() {
    document.getElementById("list").style.display = "block";
    document.getElementById("grid").style.display = "none";
}

function gridView() {
    document.getElementById("list").style.display = "none";
    document.getElementById("grid").style.display = "flex";
}




$('#modalGaleria').on('show.bs.modal', function(event) {
    var button = $(event.relatedTarget);
    var src = button[0].parentElement.children[0].src;
    var title = button[0].parentElement.children[1].children[0].innerText;
    var modal = $(this);
    modal.find('.modal-title').text(title);
    modal.find('img')[0].src = src;
});

$('#modalImagens').on('show.bs.modal', function(event) {
    var button = $(event.relatedTarget);
    var src = button[0].parentElement.children[0].src;
    var modal = $(this);
    modal.find('img')[0].src = src;
});