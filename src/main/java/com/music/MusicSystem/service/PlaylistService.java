package com.music.MusicSystem.service;

import com.music.MusicSystem.model.Playlist;
import com.music.MusicSystem.model.Song;
import com.music.MusicSystem.repository.PlaylistRepository;
import com.music.MusicSystem.repository.SongRepository;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PlaylistService {
    @Autowired
    private PlaylistRepository playlistRepository;

    @Autowired
    private SongRepository songRepository;

    @PostConstruct
    public void createDefaultPlaylists() {
        if (playlistRepository.count() == 0) {
            playlistRepository.save(new Playlist(null, "Hindi Hits", "Hindi", null));
            playlistRepository.save(new Playlist(null, "English Top Charts", "English", null));
            playlistRepository.save(new Playlist(null, "Tamil Melody", "Tamil", null));
            playlistRepository.save(new Playlist(null, "Telugu Beats", "Telugu", null));
        }
    }

    public List<Playlist> getAllPlaylists() {
        return playlistRepository.findAll();
    }

    public List<Playlist> getPlaylistsByLanguage(String language) {
        return playlistRepository.findByLanguage(language);
    }

    public Playlist createPlaylist(Playlist playlist) {
        return playlistRepository.save(playlist);
    }

    public Playlist addSongToPlaylist(Long playlistId, Long songId) {
        Playlist playlist = playlistRepository.findById(playlistId).orElse(null);
        Song song = songRepository.findById(songId).orElse(null);

        if (playlist != null && song != null) {
            playlistRepository.save(playlist);
        }

        return playlist;
    }
}
