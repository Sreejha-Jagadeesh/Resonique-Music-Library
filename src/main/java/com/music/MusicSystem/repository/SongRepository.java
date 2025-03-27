package com.music.MusicSystem.repository;

import com.music.MusicSystem.model.Song;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface SongRepository extends JpaRepository<Song, Long> {
    List<Song> findByLanguage(String language);
}
