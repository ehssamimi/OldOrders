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
    let headers = {
        'Token': Const.Token,
        'Id': Const.ID,
        // 'category_id': CatId,
        'category_id': CatId,
    };
    formData.append("Position",Position);
    formData.append("Image",Image);
    formData.append("DestinationId",DestinationId);
     let res = await axios.put(`http://chichiapp.ir:30036/admin/category/${CatId}/items/update`,formData, {headers: headers});
    // console.log(res);
    let { ItemId } = res.data ;
    let { status } = res ;
    return status
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
export async  function  DeleteCategoriey(Name){
    // console.log(Name);
    // console.log(`${Const.HomePage}admin/category/${Name}`);

    let headers = {
        'Token': Const.Token,
        'Id': Const.ID
        // 'category_name':Name,
    };

    let res = await axios.delete(`${Const.HomePage}admin/category/${Name}/delete`, {headers: headers});
    let { status } = res ;
    console.log(res);
    // console.log(data);
    return status;
}


// *****Add Package******
export async  function  allPackage(){

    let headers = {
        'Token': Const.Token,
        'Id': Const.ID,
    };

    let res = await axios.get(`${Const.HomePage}admin/packages`, {headers: headers});
    let { Items } = res.data ;
    return Items

}
export async  function  GetPackageDetail(Name){
    let headers = {
        'Token': Const.Token,
        'Id': Const.ID
    };

    let res = await axios.get(`${Const.HomePage}admin/package/${Name}`, {headers: headers});
    let { data } = res ;
    return data;
}
export async function addPackage(Name) {
    let formData = new FormData();
    formData.append("Name", Name);

    let headers = {
        'Token': Const.Token,
        'Id': Const.ID,
    };

    let res = await axios.post(`${Const.HomePage}admin/packages/add`, formData, {headers: headers});
    let {ItemId} = res.data;
    let {status} = res;
    if (status === 200) {
        return ItemId
    } else {
        return ""
    }
}
export async  function  UpdatePackage(CatId,Position,Image,DestinationId){
    let formData = new FormData();
    let headers = {
        'Token': Const.Token,
        'Id': Const.ID,
        // 'category_id': CatId,
        // 'category_id': CatId,
    };
    formData.append("Position",Position);
    formData.append("Image",Image);
    formData.append("DestinationId",DestinationId);
    let res = await axios.put(`${Const.HomePage}admin/packages/${CatId}/items/update`,formData, {headers: headers});
    // console.log(res);
    let { ItemId } = res.data ;
    let { status } = res ;
    return status
}
export async  function  DeletePackage(ID){
    // console.log(Name);
    // console.log(`${Const.HomePage}admin/category/${Name}`);
    // {category_id}?package_id=5db67bae8e652a4cabb3374a
    let headers = {
        'Token': Const.Token,
        'Id': Const.ID
        // 'category_name':Name,
    };

    let res = await axios.delete(`${Const.HomePage}admin/package/{category_id}?package_id=${ID}`, {headers: headers});
    let { status } = res ;
    console.log(res);
    // console.log(data);
    return status;
}


// *********Get Destination*********
export async  function  GetDestination( ) {
    let headers = {
        'Token': Const.Token,
        'Id': Const.ID
    };
    let res = await axios.get(`${Const.HomePage}banners/destinations`, {headers: headers});
    let {data} = res;
    return data
}
// *****Add Baner******

export async function addBaner(Name,Image,Destination,DestinationId) {
    let formData = new FormData();
    formData.append("Name", Name);
    formData.append("Image", Image);
    formData.append("Destination", Destination);
    formData.append("DestinationId", DestinationId);
    let headers = {
        'Token': Const.Token,
        'Id': Const.ID,
    };
    let res = await axios.post(`${Const.HomePage}banners/add`, formData, {headers: headers});
    let {ItemId} = res.data;
    let {status} = res;
    if (status === 200) {
        return ItemId
    } else {
        return ""
    }
}
export async  function  GetBanners( ) {
    let headers = {
        'Token': Const.Token,
        'Id': Const.ID
    };
    let res = await axios.get(`${Const.HomePage}banners`, {headers: headers});
    let {data} = res;
    return data.Items
}
export async  function  GetBannersDetail(Name){
    let headers = {
        'Token': Const.Token,
        'Id': Const.ID
        // 'category_name':Name,
    };
    let res = await axios.get(`${Const.HomePage}banners/${Name}`, {headers: headers});
    let { data } = res ;

    return data;
}
export async  function  DeleteBanner(id){
    // console.log(Name);
    // console.log(`${Const.HomePage}admin/category/${Name}`);

    let headers = {
        'Token': Const.Token,
        'Id': Const.ID
        // 'category_name':Name,
    };

    let res = await axios.delete(`${Const.HomePage}banners/${id}`, {headers: headers});
    let { status } = res ;
    console.log(res);
    // console.log(data);
    return status;
}

export async  function  GetBanerDetail(Name){
    // console.log(Name);
    // console.log(`${Const.HomePage}admin/category/${Name}`);

    let headers = {
        'Token': Const.Token,
        'Id': Const.ID
        // 'category_name':Name,
    };

    let res = await axios.get(`${Const.HomePage}banners/${Name}`, {headers: headers});
    let { data } = res ;
    // console.log(res);
    // console.log(data);
    return data;
}

