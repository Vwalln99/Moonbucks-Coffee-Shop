import { loadModule } from "../index.js";
// create Tags all
function createTag(parent_node, tag_node, id_name, class_name, content, imageSrc) {
    const tag = document.createElement(tag_node);

    if (parent_node != null) {
        parent_node.append(tag);
    } else {
        const startpoint = document.getElementById("content");
        startpoint.append(tag);
    }

    if (id_name != null) {
        tag.id = id_name;
    }

    if (class_name != null) {
        tag.className = class_name;
    }

    if (content != null) {
        tag.innerHTML = content;
    }
    if (imageSrc != null) {
        const image = document.createElement("img");
        image.src = imageSrc;
        tag.appendChild(image);
    }

    return tag;
}

// create multiple tags all
function createMultiTags(parent_node, tag_node, num, list, menu) {
    for (let i = 0; i < num; i++) {
        if (menu) {
            createTag(
                parent_node,
                tag_node,
                null,
                list[i],
                '<a href="#' + list[i].replace(/ /g, "-") + '">' + list[i] + "</a>"
            );
        } else {
            createTag(
                parent_node,
                tag_node,
                null,
                list[i].replace(/ /g, "_"),
                list[i]
            );
        }
    }
}

// // create header all
function createHeader() {
    const header = createTag(null, "header");
    const logo = createTag(header, "div", null, "logo_header");
    const heading = createTag(header, "h1", null, null, "Moonbucks");
    const nav_header = createTag(header, "nav", "nav_header");
    const menu = createTag(nav_header, "ul", null, "menu_header");

    const menuItems = ["Home", "Team", "Contact"];

    menuItems.forEach((item) => {
        const menuItem = createTag(menu, "li", `${item.toLowerCase()}-link`, null, item);
        menuItem.addEventListener("click", () => {
            loadModule(item.toLowerCase());
        });
    });
}

// create footer all
function createFooter() {
    const footer = createTag(null, "footer");
    createTag(footer, "div", "logo_footer");

    const socialLinks = createTag(footer, "div", "social_links");
    const facebookLink = createTag(socialLinks, "a", null, "social_link", "Facebook");
    const instagramLink = createTag(socialLinks, "a", null, "social_link", "Instagram");
    const twitterLink = createTag(socialLinks, "a", null, "social_link", "Twitter");

    facebookLink.href = "https://www.facebook.com";
    instagramLink.href = "https://www.instagram.com";
    twitterLink.href = "https://www.twitter.com";
}


export { createTag, createMultiTags, createHeader, createFooter };