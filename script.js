'use strict';

const textInput = document.getElementById('txt-input');
const addButton = document.getElementById('add-btn');
const listIdx = [];

textInput.addEventListener('keyup', () => {
  if (textInput.value === '') {
    addButton.disabled = true;
  } else {
    addButton.disabled = false;
  };
});

addButton.addEventListener('click', addListItem);

function addListItem() {
  const content = textInput.value;
  const listTag = document.getElementById('list');
  listIdx.push(content);
  const idIdx = String(listIdx.length);
  const itemForm = `<li class="list-item removing${idIdx}">
                      <div class="item-content" id="item-content${idIdx}">${content}</div>
                      <div class="set-btns">
                        <input class="edit-btn" onclick="if (${idIdx} !== '0') { editListItem(${idIdx}); };" id="edit-btn${idIdx}" type="button" value="edit">
                        <input class="remove-btn" onclick="if (${idIdx} !== '0') { removeItem(${idIdx}); };" id="remove-btn${idIdx}" type="button" value="remove" hidden>
                        <input class="done-btn" onclick="if (${idIdx} !== '0') { checkItemDone(${idIdx}); };" id="done-btn${idIdx}" type="checkbox">
                      </div>
                    </li>
                    <hr class="removing${idIdx}">`;
  listTag.insertAdjacentHTML('afterbegin',itemForm);
  textInput.value = '';
  console.log(listIdx);
  addButton.disabled = true;
};

function editListItem(idx) {
  const itemContent = document.getElementById(`item-content${idx}`);
  const originalContent = itemContent.innerText;
  const editText = prompt('Edit list item', originalContent);
  itemContent.innerText = editText;
  listIdx[idx - 1] = editText;
};

function checkItemDone(idx) {
  const itemContent = document.getElementById(`item-content${idx}`);
  const doneCheckBox = document.getElementById(`done-btn${idx}`);
  const editButton = document.getElementById(`edit-btn${idx}`);
  const removeButton = document.getElementById(`remove-btn${idx}`);
  console.log(`check item : ${itemContent.innerText}`)
  if (doneCheckBox.checked) {
    editButton.hidden = true;
    removeButton.hidden = false;
    itemContent.style.color = '#B0A8B9';
    itemContent.style.textDecoration = 'line-through';
  } else {
    editButton.hidden = false;
    removeButton.hidden = true;
    itemContent.style.color = '#141E12';
    itemContent.style.textDecoration = 'none';
  };
};

function removeItem(idx) {
  const liTag = document.querySelector(`li.removing${idx}`);
  const hrTag = document.querySelector(`hr.removing${idx}`);
  const ulTag = document.getElementById('list');
  ulTag.removeChild(liTag);
  ulTag.removeChild(hrTag);
}