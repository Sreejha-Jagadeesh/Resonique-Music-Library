package com.music.MusicSystem.repository;

import com.music.MusicSystem.model.Playlist;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface PlaylistRepository extends JpaRepository<Playlist, Long> {
    List<Playlist> findByLanguage(String language);
}
