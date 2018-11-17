import Realm from 'realm';

class Album extends Realm.Object { }
Album.schema = {
    name: 'Album',
    primaryKey: 'Id',
    properties: {
        Id: { type: 'string' },
        Title: { type: 'string' },
        CreateDate: { type: 'date' },
    },
};

class Media extends Realm.Object { }
Media.schema = {
    name: 'Media',
    primaryKey: 'Id',
    properties: {
        Id: { type: 'string' },
        Name: { type: 'string' },
        Path: { type: 'string' },
        DateAdded: { type: 'date' },
    }
}
class AlbumMedia extends Realm.Object { }
AlbumMedia.schema = {
    name: 'AlbumMedia',
    primaryKey: 'Id',
    properties: {
        Id: { type: 'string' },
        AlbumId: { type: 'string' },
        MediaId: { type: 'string' },
    }
}

class AppSetting extends Realm.Object { }
AppSetting.schema = {
    name: 'AppSetting',
    primaryKey: 'Id',
    properties: {
        Id: { type: 'string' },
        Email: { type: 'string' },
        Password: { type: 'string' },
        Pin: { type: 'string' },
        FakePassword: { type: 'string' }
    }
}

var newPath = '/Users/zahoor/Desktop/Realm/PGallery.realm';
module.exports = new Realm({
    schema: [Album, Media, AlbumMedia, AppSetting],
    schemaVersion: 3,
});