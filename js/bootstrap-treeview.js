
      function staticDataSource(openedParentData, callback) {
        childNodesArray = [
          { "name": "Ascending and Descending", "type": "folder" },
          { "name": "Drawing Hands", "type": "folder" },
          { "name": "Belvedere", "type": "folder" },
          { "name": "House of Stairs", "type": "folder" }
        ];

        callback({
          data: childNodesArray
        });
      }
 
            $(function() {
         $('#myTree').tree({
            dataSource: staticDataSource,
            multiSelect: false,
            folderSelect: true
          });
      });


          <!-- api -->

            function dynamicDataSource(openedParentData, callback) {
        var childNodesArray = [];

        // call API, posting options
        $.ajax({
          'type': 'post',
          'url': '/tree/data',
          'data': openedParentData  // first call with be an empty object
        })
        .done(function(data) {
          // configure datasource
          var childObjectsArray = data;

          // pass an array with the key 'data' back to the tree
          // [ {'name': [string], 'type': [string], 'attr': [object] } ]
          callback({
            data: childNodesArray
          });

        });
      }


            function staticDataSource(parentData, callback) {
        // includes rebeccapurple styling

        childNodesArray = [
          {
            "name": "Ascending and Descending",
            "type": "folder",
            "attr": {
              "id": "ascending-and-descending"
            }
          },

          {
            "name": "Drawing Hands",
            "type": "folder",
            "attr": {
              "id": "drawing-hands"
            }
          },
          
          {
            "name": "Belvedere",
            "type": "folder",
            "attr": {
              "id": "belvedere"
            }
          },
          
          {
            "name": "House of Stairs",
            "type": "folder",
            "attr": {
              "id": "house-of-stairs"
            }
          },
         
        ];

        callback({
          data: childNodesArray
        });
      }


            $('#myTree').on('deselected.fu.tree selected.fu.tree', function(event) {
        // insert JSON text of selected items after tree
        $('#myTree').after('SELECTED ITEMS: ' + JSON.stringify( $('#myTree').tree('selectedItems') ) + '<br>' );
      });

      $('#myTree').on('disclosedFolder.fu.tree closed.fu.tree', function(event, parentData) {
        // insert JSON text of selected items after tree
        $('#myTree').after('OPENED/CLOSED FOLDER DATA: ' + JSON.stringify( parentData ) + ' ' );
     
