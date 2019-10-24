import * as Const from "../../constants/ServerConst";
import axios from "axios";

export async  function  sendImg(file,permission){
    let formData = new FormData();
    formData.append("PermissionLevel", permission);
    formData.append("file", file);

    let headers = {
        'Token': Const.Token,
        'Id': Const.ID,
     };

    let res = await axios.post(`${Const.Download_Server_URL}upload/data-form`,formData, {headers: headers});
    let { UploadId } = res.data ;
    let { status } = res ;
     if (status===200) {
        return UploadId
    }else {
        return ""
    }
}

export async  function  GetCatNameFunction(Name){
    let formData = new FormData();
    formData.append("Name", Name);

    let headers = {
        'Token': Const.Token,
        'Id': Const.ID,
    };

    let res = await axios.post(`${Const.HomePage}admin/category/add`,formData, {headers: headers});
    let { ItemId } = res.data ;
    let { status } = res ;
    if (status===200) {
        return ItemId
    }else {
        return ""
    }
}
export async  function  UpdateCategories(CatId,Position,Image,DestinationId){
    let formData = new FormData();
    // console.log('CatId')
    // console.log(CatId)
    // console.log('Position')
    // console.log(Position)
    // console.log('Image')
    // console.log(Image)
    // console.log('DestinationId')
    // console.log(DestinationId)
    // formData.append("Position ", Position);
    // formData.append("Image", Image);
    // formData.append("DestinationId", DestinationId);

    let headers = {
        'Token': Const.Token,
        'Id': Const.ID,
        // 'category_id': CatId,
        'category_id': CatId,
    };
    formData.append("Position",Position);
    formData.append("Image",Image);
    formData.append("DestinationId",DestinationId);
    // let res = await axios.put(`${Const.HomePage}admin/category/${CatId}/items/update`,formData, {headers: headers});
    let res = await axios.put(`http://chichiapp.ir:30036/admin/category/${CatId}/items/update`,formData, {headers: headers});
    console.log(res);
    // let { ItemId } = res.data ;
    // let { status } = res ;
    // if (status===200) {
    //     return ItemId
    // }else {
    //     return ""
    // }
    // var data = new FormData();
    // data.append("Position", "0");
    // data.append("Image", "5db01072b227729bd3aba51d");
    // data.append("DestinationId", "null");
    //
    // var xhr = new XMLHttpRequest();
    // xhr.withCredentials = true;
    //
    // xhr.addEventListener("readystatechange", function () {
    //     if (this.readyState === 4) {
    //         console.log(this.responseText);
    //     }
    // });
    //
    // xhr.open("PUT", "http://chichiapp.ir:30036/admin/category/5db00a7f05af81b1723eb79d/items/update");
    // xhr.setRequestHeader("id", "5d87e194549ae0267b5268cc");
    // xhr.setRequestHeader("token", "6109bfa925d615dc888c94d1ba858bad960f3dcb95a69453bd6dd1ba8acc4c49");
    // xhr.setRequestHeader("category_id", "5db00a7f05af81b1723eb79d");
    // xhr.setRequestHeader("cache-control", "no-cache");
    // xhr.setRequestHeader("postman-token", "eaa0d547-20e7-b802-56f9-ea0c4c011f0b");
    //
    // xhr.send(data);
}


export async  function  GetCategoriesAll(){

    let headers = {
        'Token': Const.Token,
        'Id': Const.ID,
    };

    let res = await axios.get(`${Const.HomePage}admin/categories`, {headers: headers});
    let { Items } = res.data ;
    return Items

}
export async  function  GetCategorieyDetail(Name){
    // console.log(Name);
    // console.log(`${Const.HomePage}admin/category/${Name}`);

    let headers = {
        'Token': Const.Token,
        'Id': Const.ID
        // 'category_name':Name,
    };

    let res = await axios.get(`${Const.HomePage}admin/category/${Name}`, {headers: headers});
    let { data } = res ;
    // console.log(res);
    // console.log(data);
    return data;
}