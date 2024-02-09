// javaScript for the BOM lesson bom.html

const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

const bookOfMormon = [
    {
        title: "1 Nephi",
        chapter: 22,
    },
    {
        title: "2 Nephi",
        chapter: 33,
    },
    {
        title: "Jacob",
        chapter: 7,
    },
    {
        title: "Enos",
        chapter: 1,
    },
    {
        title: "Jarom",
        chapter: 1,
    },
    {
        title: "Omni",
        chapter: 1,
    },
    {
        title: "Words Of Mormon",
        chapter: 1,
    },
    {
        title: "Mosiah",
        chapter: 29,
    },
    {
        title: "Alma",
        chapter: 63,
    },
    {
        title: "Helaman",
        chapter: 16,
    },
    {
        title: "3 Nephi",
        chapter: 30,
    },
    {
        title: "4 Nephi",
        chapter: 1,
    },
    {
        title: "Mormon",
        chapter: 9,
    },
    {
        title: "Ether",
        chapter: 15,
    },
    {
        title: "Moroni",
        chapter: 10,
    },
];

//check if the book is valid
function checkBookChapter(bookTitle, chapterNumber) {
    for (const book of bookOfMormon) {
        if (book.title === bookTitle) {
            if (chapterNumber >= 1 && chapterNumber <= book.chapter) {
                return `${book.title} ${chapterNumber}`;
            } else {
                return alert(`${book.title} does not have chapter ${chapterNumber}`);
            }
        }
    }
    return alert(`Book ${bookTitle} not found in the Book of Mormon`);
}

document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {

        button.click();
    }
});

// First Attempt anonymous function
button.addEventListener("click", () => {
    if (input.value != "") {
        let listItem = document.createElement("li");
        listItem.textContent = input.value.trim();

        const userInfo = listItem.textContent.split(" ");
        const bookTitle = userInfo.slice(0, -1).join(" ");
        const chapterNumber = parseInt(userInfo[userInfo.length - 1]);
        console.log(bookTitle, chapterNumber);

        listItem.textContent = checkBookChapter(bookTitle, chapterNumber);

        if (listItem.textContent !== "") {
            
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "❌";
            listItem.append(deleteButton);

            list.append(listItem);
            input.value = "";
            input.focus();

            deleteButton.addEventListener("click", () => {
                list.removeChild(listItem);
                input.focus();
            });
        } else {
            input.value = "";
            input.focus();
            return;
        }
    } else {
        alert("You must enter a book name and chapter number");
        input.focus();
        return;
    }
});