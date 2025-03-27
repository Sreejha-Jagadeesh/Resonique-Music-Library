package com.music.MusicSystem.controllers;

import com.music.MusicSystem.model.Playlist;
import com.music.MusicSystem.service.PlaylistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/playlists")
public class PlaylistController {
    @Autowired
    private PlaylistService playlistService;

    @GetMapping("/")
    public List<Playlist> getAllPlaylists() {
        return playlistService.getAllPlaylists();
    }

    @GetMapping("/{language}")
    public List<Playlist> getPlaylistsByLanguage(@PathVariable String language) {
        return playlistService.getPlaylistsByLanguage(language);
    }

    @PostMapping("/create")
    public Playlist createPlaylist(@RequestBody Playlist playlist) {
        return playlistService.createPlaylist(playlist);
    }

    @PostMapping("/{playlistId}/addSong/{songId}")
    public Playlist addSongToPlaylist(@PathVariable Long playlistId, @PathVariable Long songId) {
        return playlistService.addSongToPlaylist(playlistId, songId);
    }
}
