import _ from 'lodash';
import{createTag, createMultiTags, createHeader, createFooter} from './modules/functions.js';
import'./team.css';
"use strict";
function createTeamContent() {
    //createHeader();
  
    const team_section = createTag(null, "section", "team_section");
  
    const teamMembers = [
      {
        imageSrc: "team_member1.jpg", 
        description: "Max - CEO",
      },
      {
        imageSrc: "team_member2.jpg", 
        description: "Joanne - Marketing",
      },
      {
        imageSrc: "team_member3.jpg", 
        description: "Steve - Barista",
      },
      {
        imageSrc: "team_member4.jpg", 
        description: "Muffin - Support",
      },
    ];


    teamMembers.forEach((member) => {
      const teamMemberDiv = createTag(team_section, "div", null, "team_member");
  
      const memberImage = createTag(teamMemberDiv, "img", null, "team_member_image");
      memberImage.src = member.imageSrc;
  
      const memberDescription = createTag(teamMemberDiv, "p", null, "team_member_description", member.description);
    });
   // createFooter();
  
}
 
  export{createTeamContent};