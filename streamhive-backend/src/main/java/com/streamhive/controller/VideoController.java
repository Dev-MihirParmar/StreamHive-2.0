package com.streamhive.controller;

import com.streamhive.service.VideoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/videos")
public class VideoController {

    @Autowired
    VideoService videoService;

    @PostMapping("/upload")
    public ResponseEntity<?> uploadVideo(@RequestParam("file") MultipartFile file) {
        // Handle video upload
        videoService.uploadVideo(file);
        return ResponseEntity.ok("Video uploaded successfully");
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getVideo(@PathVariable Long id) {
        // Return video details
        Object videoDetails = videoService.getVideoDetails(id);
        return ResponseEntity.ok(videoDetails);
    }
}
