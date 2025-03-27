package com.music.MusicSystem.controllers;

import com.music.MusicSystem.model.Song;
import com.music.MusicSystem.service.SongService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/songs")
public class SongController {
    @Autowired
    private SongService songService;

    @GetMapping("/")
    public List<Song> getAllSongs() {
        return songService.getAllSongs();
    }

    @GetMapping("/{language}")
    public List<Song> getSongsByLanguage(@PathVariable String language) {
        return songService.getSongsByLanguage(language);
    }

    @PostMapping("/add")
    public Song addSong(@RequestBody Song song) {
        return songService.addSong(song);
    }
}
