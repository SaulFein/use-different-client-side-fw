Template.home.events({
  'submit form':function(e){
    e.preventDefault();
    var title=e.target.title.value;
    var description=e.target.description.value;
    //alert('Title=' +title+ ', '+'description='+description);
    var obj={
      title:title,
      description:description
    }
    if(this._id){
      Meteor.call('updateData', this._id, obj); //calls method from server to update
    }else{
      Meteor.call('insertData', obj); //calls method from server to insert
    }
    //alert('insert success');
  },
  'click #remove':function(e){
    crud.remove(this._id);//remove data from mongodb
  },
  // 'click #cancel':function(e){
  //   title = '';
  //   description = '';
  // }
});
Template.home.helpers({
  //get data from mongodb
  getData:function(){
    return crud.find();
  }
})
