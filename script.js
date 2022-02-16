'use strict';

const textInput = document.getElementById('txt-input');
const addButton = document.getElementById('add-btn');
const listTag = document.getElementById('list');
const editButton = document.getElementById('edit-btn');
const doneCheckBox = document.getElementById('done-btn');

textInput.addEventListener('keyup', () => {
  if (textInput.value === '') {
    addButton.disabled = true;
  } else {
    addButton.disabled = false;
  };
});

addButton.addEventListener('click', () => {
  const content = textInput.value;
  const itemForm = `<li class="list-item">
                      <div class="item-content">${content}</div>
                      <div class="set-btns">
                        <input class="edit-btn" id="edit-btn" type="button" value="edit">
                        <input class="remove-btn" id="remove-btn" type="button" value="remove" hidden>
                        <input class="done-btn" id="done-btn" type="checkbox">
                      </div>
                    </li>
                    <hr>`;
  listTag.insertAdjacentHTML('beforeend',itemForm);
});