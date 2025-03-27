package com.music.MusicSystem.service;

import com.music.MusicSystem.model.Song;
import com.music.MusicSystem.repository.SongRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SongService {
    @Autowired
    private SongRepository songRepository;

    public List<Song> getAllSongs() {
        return songRepository.findAll();
    }

    public List<Song> getSongsByLanguage(String language) {
        return songRepository.findByLanguage(language);
    }

    public Song addSong(Song song) {
        return songRepository.save(song);
    }
}
