/**
 * Created by Pava on 5/31/2015.
 */



function nephew(user){
    var result=[];
    for(i=0; i<user.tree.length;i++){
        for(j=0;j<user.tree.length;j++){
            if(user.tree[i].genre=="male" && (user.tree[j].myID==user.tree[i].mother || user.tree[j].myID==user.tree[i].father) && (user.tree[j].mother=="root" || user.tree[j].father=="root"))
                result.push(user.tree[i].myID);
        }
    }
    return convert(result,user);
}
function niece(user){
    var result=[];
    for(i=0; i<user.tree.length;i++){
        for(j=0;j<user.tree.length;j++){
            if(user.tree[i].genre=="female" && (user.tree[j].myID==user.tree[i].mother || user.tree[j].myID==user.tree[i].father) && (user.tree[j].mother=="root" || user.tree[j].father=="root"))
                result.push(user.tree[i].myID);
        }
    }
    return convert(result,user);
}

function son(user){
    var result=[];
    for(i=0;i<user.tree.length;i++){
        if(user.tree[i].genre=="male" && ("root"==user.tree[i].mother || "root"==user.tree[i].father)) result.push(user.tree[i].myID);
    }
    return convert(result,user);
}
function daughter(user){
    var result=[];
    for(i=0;i<user.tree.length;i++){
        if(user.tree[i].genre=="female" && ("root"==user.tree[i].mother || "root"==user.tree[i].father)) result.push(user.tree[i].myID);
    }
    return convert(result,user);
}

function sister(user){
    var result=[];
    var tempNode;
    for(i=0;i<user.tree.length;i++) if(user.tree[i].myID=="root") tempNode=user.tree[i];
    for(i=0;i<user.tree.length;i++){
        if(user.tree[i].gender=="female" && (user.tree[i].mother == tempNode.mother || user.tree[i].father==tempNode.father)) result.push(user.tree[i].myID);
    }
    return convert(result,user);
}
function brother(user){
    var result=[];
    var tempNode;
    for(i=0;i<user.tree.length;i++) if(user.tree[i].myID=="root") tempNode=user.tree[i];
    for(i=0;i<user.tree.length;i++){
        if(user.tree[i].gender=="male" && (user.tree[i].mother == tempNode.mother || user.tree[i].father==tempNode.father)) result.push(user.tree[i].myID);
    }
    return convert(result,user);
}

function mother(user){
    var result= [];
    for(i=0;i<user.tree.length;i++){
        if(user.tree[i].myID=="root" && user.tree[i].mother!="") result.push(user.tree[i].mother);
    }
    return convert(result,user);
}
function father(user){
    var result= [];
    for(i=0;i<user.tree.length;i++){
        if(user.tree[i].myID=="root" && user.tree[i].father!="") result.push(user.tree[i].father);
    }
    return convert(result,user);
}


function grandma(user){
    var tempNode;
    var result = []
    for(i=0;i<user.tree.length;i++) if(user.tree[i].myID=="root") tempNode=user.tree[i];

    for(i=0;i<user.tree.length;i++)
        if((user.tree[i].myID==tempNode.father || user.tree[i].myID==tempNode.mother) && user.tree[i].mother!="") result.push(user.tree[i].mother);
    return convert(result,user);
}
function grandpa(user){
    var tempNode;
    var result = [];
    for(i=0;i<user.tree.length;i++)
        if(user.tree[i].myID=="root") tempNode=user.tree[i];

    for(i=0;i<user.tree.length;i++)
        if((user.tree[i].myID==tempNode.father || user.tree[i].myID==tempNode.mother) && user.tree[i].father!="") result.push(user.tree[i].father);
    return convert(result,user);
}

function convert(result,user){
    var convertedResult=[];
    for(i=0;i<result.length;i++) {
        for(j=0;j<user.tree.length;j++) if(user.tree[j].myID==result[i]) convertedResult.push(user.tree[j].name);
    }
    return convertedResult;
}

function getTreeTags(user, name){

    switch (name){
        case "son" : return son(user);
        case "daughter" : return daughter(user);
        case "sister": return sister(user);
        case "brother": return brother(user);
        case "mother": return mother(user);
        case "father": return father(user);
        case "nephew": return nephew(user);
        case "niece" : return niece(user);
        case "grandpa": return grandpa(user);
        case "grandma": return grandma(user);
        default: return;
    }
}






module.exports = {
    getTreeTags: getTreeTags
};