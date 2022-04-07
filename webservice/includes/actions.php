<?php
/**
 * @return array
 */
function getGames()
{
    return [
        [
            "id" => 1,
            "name" => "Demons Souls",
            "cover" => "./images/demonssouls.jpg"
        ],
        [
            "id" => 2,
            "name" => "Dark Souls",
            "cover" => "./images/darksouls.png"
        ],
        [
            "id" => 3,
            "name" => "Dark Souls II",
            "cover" => "./images/darksouls2.jpg"
        ],
        [
            "id" => 4,
            "name" => "Dark Souls III",
            "cover" => "./images/darksouls3.jpg"
        ],
        [
            "id" => 5,
            "name" => "Bloodborne",
            "cover" => "./images/bloodborne.jpg"
        ],
        [
            "id" => 6,
            "name" => "Sekiro: Shadows Die Twice",
            "cover" => "./images/sekiro.jpg"
        ],
        [
            "id" => 7,
            "name" => "Elden Ring",
            "cover" => "./images/eldenring.png"
        ]
    ];
}

/**
 * @param $id
 * @return mixed
 */
function getGameDetails($id)
{
    $tags = [
        1 => [
            "developer" => "FromSoftware",
            "director" => "Hidetaka Miyazaki",
            "publisher" => "Bandai Namco",
            "release" => 2009,
            "platforms" => 'Playstation 3'
        ],
        2 => [
            "developer" => "FromSoftware",
            "director" => "Hidetaka Miyazaki",
            "publisher" => "Bandai Namco",
            "release" => 2011,
            "platforms" => ['Playstation 3', 'Xbox 360', 'Microsoft Windows', 'Playstation 4', 'Xbox One', 'Nintendo Switch']
        ],
        3 => [
            "developer" => "FromSoftware",
            "director" => "Tomohiro Shibuya & Yui Tanimura",
            "publisher" => "Bandai Namco",
            "release" => 2014,
            "platforms" => ['Playstation 3', 'Xbox 360', 'Microsoft Windows', 'Playstation 4', 'Xbox One']
        ],
        4 => [
            "developer" => "FromSoftware",
            "director" => "Hidetaka Miyazaki",
            "publisher" => "Bandai Namco",
            "release" => 2016,
            "platforms" => ['Playstation 4', 'Microsoft Windows', 'Xbox One']
        ],
        5 => [
            "developer" => "FromSoftware",
            "director" => "Hidetaka Miyazaki",
            "publisher" => "Sony Computer Entertainment",
            "release" => 2015,
            "platforms" => 'Playstation 4'
        ],
        6 => [
            "developer" => "FromSoftware",
            "director" => "Hidetaka Miyazaki & Kazuhiro Hamatani",
            "publisher" => "Activision",
            "release" => 2019,
            "platforms" => ['Playstation 4', 'Microsoft Windows', 'Xbox One', 'Stadia', 'Playstation 5']
        ],
        7 => [
            "developer" => "FromSoftware",
            "director" => "Hidetaka Miyazaki & Yui Tanimura",
            "publisher" => "Bandai Namco",
            "release" => 2022,
            "platforms" => ['Playstation 4', 'Microsoft Windows', 'Xbox One', 'Xbox Series X', 'Playstation 5']
        ]
    ];

    return $tags[$id];
}